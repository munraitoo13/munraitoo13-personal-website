"use server";

import bcrypt from "bcryptjs";
import { prisma, encrypt } from "@/lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!email || !password) {
    console.log("Email and password are required");
    return;
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    console.log("User not found");
    return;
  }

  const checkPassword = bcrypt.compareSync(password, user.password);

  if (!checkPassword) {
    console.log("Invalid password");
    return;
  } else {
    const { id, name } = user!;
    const token = await encrypt({ name, id });
    cookies().set("token", token);
    redirect("/admin");
  }
}
