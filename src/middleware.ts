import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
  throw new Error("JWT_SECRET is not defined");
}

const key = new TextEncoder().encode(secretKey);

export async function middleware(req: Request) {
  const token = cookies().get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    await jwtVerify(token, key);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/admin"],
};
