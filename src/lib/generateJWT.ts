import { JWTPayload, SignJWT } from "jose";
import { getJWTSecret } from "@/utils/getJWTSecret";

export async function generateJWT(payload: JWTPayload) {
  const JWTSecret = getJWTSecret();

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(JWTSecret);
}
