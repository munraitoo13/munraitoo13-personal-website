import "server-only";

import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { createHash } from "crypto";

type RateLimitConfig = {
  action: string;
  key: string;
  maxAttempts: number;
  windowMs: number;
};

function hashKeyPart(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function getRequestIp() {
  const forwardedFor = headers().get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return headers().get("x-real-ip")?.trim() || "unknown";
}

export async function consumeRateLimit({
  action,
  key,
  maxAttempts,
  windowMs,
}: RateLimitConfig) {
  const normalizedKey = hashKeyPart(key);
  const now = new Date();
  const windowStart = new Date(now.getTime() - windowMs);

  const recentAttempts = await prisma.rateLimitEvent.count({
    where: {
      action,
      key: normalizedKey,
      createdAt: {
        gte: windowStart,
      },
    },
  });

  if (recentAttempts >= maxAttempts) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: windowMs,
    };
  }

  await prisma.rateLimitEvent.create({
    data: {
      action,
      key: normalizedKey,
    },
  });

  return {
    allowed: true,
    remaining: Math.max(0, maxAttempts - recentAttempts - 1),
    retryAfterMs: 0,
  };
}
