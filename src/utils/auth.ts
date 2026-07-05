import "server-only";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/tokenUtils";

export async function getAuthenticatedAdmin() {
  const token = cookies().get("token")?.value;
  if (!token) return null;

  const payload = await verifyToken(token);
  const userId = payload?.sub;

  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  return user;
}

export async function requireAuthenticatedAdmin() {
  const user = await getAuthenticatedAdmin();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}
