import { prisma } from "@/app/lib/prisma";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import argon2id from "argon2";
import { redirect } from "next/navigation";

// sign jwt token
const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
  throw new Error("JWT_SECRET is not defined");
}
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!email || !password) {
    // throw new Error("Email or password is missing");
    console.log("Email or password is missing");
  } else if (!user) {
    // throw new Error("User not found");
    console.log("User not found");
  } else {
    const checkPassword = await argon2id.verify(user.password, password);
    if (checkPassword) {
      const token = await encrypt({ email: user.name });
      cookies().set("token", token);
      redirect("/admin");
    } else {
      // throw new Error("Invalid password");
      console.log("Invalid password");
    }
  }
}

export function getSession() {
  const session = cookies().get("token")?.value;
  return session;
}

export function sessionBool() {
  return getSession();
}
