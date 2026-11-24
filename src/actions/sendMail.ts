"use server";

import { CONTACT_EMAIL } from "@/constants/constants";
import { getMailSender, getMailTransporter } from "@/lib/nodemailer";
import { escapeHtml } from "@/utils/escapeHtml";
import { headers } from "next/headers";
import { z } from "zod";

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(64),
  email: z.email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(64),
  message: z.string().trim().min(1, "Message is required").max(1024),
  website: z.string().optional(),
});

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const ipAttempts = new Map<string, number[]>();

function getRequestIp() {
  const forwardedFor = headers().get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return headers().get("x-real-ip")?.trim() || "unknown";
}

function checkMemoryRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recent = (ipAttempts.get(ip) ?? []).filter((ts) => ts > windowStart);

  if (recent.length >= RATE_LIMIT_MAX_ATTEMPTS) {
    ipAttempts.set(ip, recent);
    return false;
  }

  recent.push(now);
  ipAttempts.set(ip, recent);

  if (ipAttempts.size > 500) {
    ipAttempts.forEach((timestamps, key) => {
      const valid = timestamps.filter((ts) => ts > windowStart);
      if (valid.length === 0) ipAttempts.delete(key);
      else ipAttempts.set(key, valid);
    });
  }

  return true;
}

export async function sendMail(data: ContactData) {
  try {
    const parsedData = formSchema.parse(data);

    // Honeypot triggered: silently accept without dispatching email
    if (parsedData.website && parsedData.website.trim().length > 0) {
      return { success: true, message: "Email sent successfully" };
    }

    const requestIp = getRequestIp();
    if (!checkMemoryRateLimit(requestIp)) {
      return {
        success: false,
        message: "Too many messages sent. Please try again later.",
      };
    }

    const transporter = getMailTransporter();
    const sender = getMailSender() || CONTACT_EMAIL;

    await transporter.sendMail({
      from: sender,
      to: sender,
      replyTo: parsedData.email.toLowerCase().trim(),
      subject: `[munraitoo13.dev] ${parsedData.subject}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(parsedData.name)} (${escapeHtml(parsedData.email)})</p>
        <p><strong>Subject:</strong> ${escapeHtml(parsedData.subject)}</p>
        <hr />
        <p>${escapeHtml(parsedData.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error);
      return { success: false, message: "Invalid form data" };
    }

    console.error("Unexpected error sending mail:", error);
    return { success: false, message: "An unexpected error occurred" };
  }
}
