"use server";

import { prisma } from "@/lib/prisma";
import { generateJwt } from "@/utils/tokenUtils";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  try {
    // form data
    const data = {
      email: formData.get("email")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? "",
    };

    // get user from db
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user || !user.password) {
      return { error: "Invalid credentials." };
    }

    // check password
    const passwordCheck = await bcrypt.compare(data.password, user.password);
    if (!passwordCheck) {
      return { error: "Invalid credentials." };
    }

    // set token
    const { id, name } = user;
    const token = await generateJwt({ id, name });
    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
    });
  } catch (error) {
    console.error("Error during login:", error);
  }

  // redirect to admin page
  redirect("/admin");
}
