"use server";

import { JWTPayload, SignJWT } from "jose";
import { getJwtKey } from "@/utils/getJwtKey";

export async function generateJwt(payload: JWTPayload) {
  const key = getJwtKey();

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}
