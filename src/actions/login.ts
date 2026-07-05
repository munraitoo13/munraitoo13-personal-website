"use server";

import { prisma } from "@/lib/prisma";
import { consumeRateLimit, getRequestIp } from "@/utils/rateLimit";
import { signToken, TOKEN_MAX_AGE_SECONDS } from "@/utils/tokenUtils";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { z } from "zod";

const INVALID_CREDENTIALS_MESSAGE = "Invalid credentials";
const DUMMY_PASSWORD_HASH =
  "$2a$12$7qJqj0n17Q4Wc1l9M2OEtubh3Yf9f9D0KQvQx4b8m7lM4sM1dP8aK";
const LOGIN_RATE_LIMIT_MESSAGE =
  "Too many login attempts. Please try again later.";

async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

const formSchema = z.object({
  email: z.email("Invalid email address."),
  password: z.string().min(1, "Password is required."),
});

export async function login(data: { email: string; password: string }) {
  try {
    const parsedData = formSchema.parse(data);
    const normalizedEmail = parsedData.email.toLowerCase().trim();
    const requestIp = getRequestIp();

    const [ipLimit, emailLimit] = await Promise.all([
      consumeRateLimit({
        action: "login-ip",
        key: requestIp,
        maxAttempts: 10,
        windowMs: 15 * 60 * 1000,
      }),
      consumeRateLimit({
        action: "login-email",
        key: normalizedEmail,
        maxAttempts: 5,
        windowMs: 15 * 60 * 1000,
      }),
    ]);

    if (!ipLimit.allowed || !emailLimit.allowed) {
      await delay(400);
      return { success: false, message: LOGIN_RATE_LIMIT_MESSAGE };
    }

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    const passwordHash = user?.password ?? DUMMY_PASSWORD_HASH;

    const passwordCheck = await bcrypt.compare(
      parsedData.password,
      passwordHash,
    );

    if (!user || !passwordCheck) {
      await delay(400);
      return { success: false, message: INVALID_CREDENTIALS_MESSAGE };
    }

    const { id, name } = user;
    const token = await signToken({ id, name });
    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: TOKEN_MAX_AGE_SECONDS,
      path: "/",
      sameSite: "strict",
    });

    return { success: true, message: "Login successful" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error during login:", error);
      return { success: false, message: "Invalid form data" };
    }

    console.error("Error during login:", error);
    return { success: false, message: "An error occurred during login" };
  }
}
