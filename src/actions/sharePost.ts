"use server";

import { prisma } from "@/lib/prisma";

export async function sharePost(id: string) {
  await prisma.post.update({
    where: { id: id },
    data: {
      shares: {
        increment: 1,
      },
    },
  });
}
