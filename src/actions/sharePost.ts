"use server";

import { prisma } from "@/lib/prisma";

export async function sharePost(id: string) {
  try {
    await prisma.post.update({
      where: { id: id },
      data: {
        shares: {
          increment: 1,
        },
      },
    });

    return { success: true, message: "Post shared successfully" };
  } catch (error) {
    console.error("Error sharing post:", error);
    return { success: false, message: "Failed to share post" };
  }
}
