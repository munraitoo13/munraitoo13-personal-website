"use server";

import { prisma } from "@/lib/prisma";

export async function deletePost(id: string) {
  try {
    await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return { success: true, message: "Post deleted successfully" };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, message: "Failed to delete post" };
  }
}
