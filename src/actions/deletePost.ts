"use server";

import { prisma } from "@/lib/prisma";
import { requireAuthenticatedAdmin } from "@/utils/auth";

export async function deletePost(id: string) {
  try {
    await requireAuthenticatedAdmin();

    await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return { success: true, message: "Post deleted successfully" };
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return { success: false, message: "Unauthorized" };
    }

    console.error("Error deleting post:", error);
    return { success: false, message: "Failed to delete post" };
  }
}
