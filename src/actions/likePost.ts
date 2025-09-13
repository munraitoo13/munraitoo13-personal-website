"use server";

import { prisma } from "@/lib/prisma";

export async function likePost(id: string) {
  try {
    await prisma.post.update({
      where: { id: id },
      data: {
        likes: {
          increment: 1,
        },
      },
    });

    return { success: true, message: "Post liked successfully" };
  } catch (error) {
    console.error("Error liking post:", error);
    return { success: false, message: "Failed to like post" };
  }
}
