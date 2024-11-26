"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deletePost(id: string) {
  try {
    // delete post
    await prisma.post.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("Error deleting a post:", error);
  }

  // redirect to admin page
  redirect("/admin");
}
