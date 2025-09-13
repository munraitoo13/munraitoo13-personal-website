"use server";

import { prisma } from "@/lib/prisma";

export async function pinPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: id },
    });
    if (!post) return { error: "Post not found" };

    await prisma.post.update({
      where: { id: id },
      data: { isFeatured: !post.isFeatured },
    });

    return { success: true, message: "Post pinned successfully" };
  } catch (error) {
    console.error("Error pinning post", error);
    return { success: false, message: "Error pinning post" };
  }
}
