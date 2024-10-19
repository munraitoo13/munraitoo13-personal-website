import { cookies } from "next/headers";
import { JWTPayload, jwtVerify, SignJWT } from "jose";

// get jwt key
export function getJwtKey(): Uint8Array {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("Secret is not defined on enviroment varibles.");
  }
  const key = new TextEncoder().encode(jwtSecret);

  return key;
}

// get token
export function getToken() {
  const token = cookies().get("token")?.value;
  if (!token) {
    throw new Error("No token found");
  }

  return token;
}

// verify token
export async function verifyToken(token: string) {
  const key = getJwtKey();
  try {
    await jwtVerify(token, key);
  } catch (error) {
    throw new Error("Invalid token");
  }
}

// generate token
export async function generateJwt(payload: JWTPayload) {
  const key = getJwtKey();
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);

  return token;
}
