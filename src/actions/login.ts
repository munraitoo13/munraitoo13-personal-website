"use server";

import { prisma } from "@/lib/prisma";
import { signToken } from "@/utils/tokenUtils";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { z } from "zod";

const formSchema = z.object({
  email: z.email("Invalid email address."),
  password: z.string().min(1, "Password is required."),
});

export async function login(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    const parsedData = formSchema.parse(data);

    const user = await prisma.user.findUnique({
      where: { email: parsedData.email },
    });
    if (!user) return { error: "Invalid credentials." };

    const passwordCheck = await bcrypt.compare(
      parsedData.password,
      user.password!,
    );
    if (!passwordCheck) return { error: "Invalid credentials." };

    const { id, name, role } = user;
    const token = await signToken({ id, name, role });
    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
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
