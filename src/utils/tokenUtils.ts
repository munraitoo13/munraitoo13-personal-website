import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { JWTExpired, JWTInvalid } from "jose/errors";

const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error("JWT_SECRET not defined");

export function getSigningKey(): Uint8Array {
  return new TextEncoder().encode(SECRET);
}

export async function verifyToken(token: string) {
  try {
    const key = getSigningKey();
    const { payload } = await jwtVerify(token, key);

    return payload;
  } catch (error) {
    if (error instanceof JWTExpired) {
      console.error("Token expired", error);
      throw new Error("Token expired");
    }
    if (error instanceof JWTInvalid) {
      console.error("Token invalid:", error);
      throw new Error("Token invalid");
    }

    console.error("Token verification failed", error);
    throw new Error("Token verification failed");
  }
}

export async function signToken(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getSigningKey());
}
