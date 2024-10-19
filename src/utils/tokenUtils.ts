import { cookies } from "next/headers";
import { getJwtKey } from "@/utils/getJwtKey";
import { jwtVerify } from "jose";

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
