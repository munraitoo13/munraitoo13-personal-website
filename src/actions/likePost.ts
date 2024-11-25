"use server";

import { prisma } from "@/lib/prisma";

export async function likePost(id: string) {
  await prisma.post.update({
    where: { id: id },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
}
