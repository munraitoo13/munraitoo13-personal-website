import { JWTPayload, SignJWT } from "jose";
import { getJwtKey } from "@/utils";

const key = getJwtKey();

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}
