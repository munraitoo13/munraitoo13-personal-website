"use server";

import { options, transporter } from "@/lib/nodemailer";
import { z } from "zod";
import { escapeHtml } from "@/utils/escapeHtml";

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  captchaToken: string | null;
};

const formSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  subject: z.string().min(1),
  message: z.string().min(1),
  captchaToken: z.string().nullable(),
});

const EMAIL = process.env.EMAIL;
if (!EMAIL) throw new Error("EMAIL not defined");

const CAPTCHA_SECRET = process.env.CAPTCHA_SECRET;
if (!CAPTCHA_SECRET) throw new Error("CAPTCHA_SECRET not defined");

export async function sendMail(data: ContactData) {
  try {
    const parsedData = formSchema.parse(data);

    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${CAPTCHA_SECRET}&response=${parsedData.captchaToken}`,
      },
    );
    const captchaResult = await captchaResponse.json();
    if (!captchaResult.success) return { success: false, message: "Captcha!" };

    const sendEmailPromises = [
      transporter.sendMail({
        ...options,

        to: parsedData.email,
        subject: "Confirmation: " + parsedData.subject,
        html: `
          <p>Hi ${escapeHtml(parsedData.name)},</p>
          <p>Thank you for reaching out. I have received your message and will get back to you shortly.</p>
          <br>
          <h2>Your Message:</h2>
          <p>${escapeHtml(parsedData.message)}</p>
        `,
      }),
      transporter.sendMail({
        ...options,

        to: EMAIL,
        subject: parsedData.subject,
        html: `
          <p>Reply to: ${escapeHtml(parsedData.email)}</p>
          <br>
          <h2>Mensagem enviada por ${escapeHtml(parsedData.name)}</h2>
          <p>${escapeHtml(parsedData.message)}</p>
        `,
      }),
    ];
    await Promise.all(sendEmailPromises);

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error);
      return { success: false, message: "Invalid form data" };
    }

    console.error("Unexpected error:", error);
    return { success: false, message: "An unexpected error occurred" };
  }
}
