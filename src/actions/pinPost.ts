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

    return {
      success: true,
      message: post.isFeatured ? "Post unfeatured" : "Post featured",
    };
  } catch (error) {
    console.error("Error pinning/unpinning post", error);
    return { success: false, message: "Error pinning/unpinning post" };
  }
}
