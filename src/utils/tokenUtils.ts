import { cookies } from "next/headers";
import { JWTPayload, jwtVerify, SignJWT } from "jose";

// get encoded secret key
export function getJwtKey(): Uint8Array {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("Secret is not defined on enviroment varibles.");
  }

  return new TextEncoder().encode(jwtSecret);
}

// get token from cookies
export function getToken() {
  const token = cookies().get("token")?.value;
  if (!token) {
    throw new Error("Token not found");
  }
  return token;
}

// verify token
export async function verifyToken(token: string) {
  try {
    await jwtVerify(token, getJwtKey());
  } catch (error) {
    throw new Error("Invalid token");
  }
}

// generate token
export async function generateJwt(payload: JWTPayload) {
  try {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(getJwtKey());
  } catch (error) {
    throw new Error("Failed to generate token");
  }
}
