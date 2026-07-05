import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { JWTExpired, JWTInvalid } from "jose/errors";

const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error("JWT_SECRET not defined");

const JWT_ISSUER = "munraitoo13-personal-website";
const JWT_AUDIENCE = "admin";
export const TOKEN_MAX_AGE_SECONDS = 60 * 60 * 8;

export function getSigningKey(): Uint8Array {
  return new TextEncoder().encode(SECRET);
}

export async function verifyToken(token: string) {
  try {
    const key = getSigningKey();
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
    });

    return payload;
  } catch (error) {
    if (error instanceof JWTExpired) {
      console.error("Token expired", error);
      return null;
    }
    if (error instanceof JWTInvalid) {
      console.error("Token invalid:", error);
      return null;
    }
    console.error("Token verification failed", error);
    return null;
  }
}

export async function signToken(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(String(payload.id ?? payload.sub ?? ""))
    .setIssuer(JWT_ISSUER)
    .setAudience(JWT_AUDIENCE)
    .setIssuedAt()
    .setExpirationTime(TOKEN_MAX_AGE_SECONDS)
    .sign(getSigningKey());
}
