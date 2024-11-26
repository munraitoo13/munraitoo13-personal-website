"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function pinPost(id: string) {
  try {
    // get the post
    const post = await prisma.post.findUnique({
      where: { id: id },
    });
    if (!post) {
      throw new Error("Post not found");
    }

    // toggle the isFeatured
    await prisma.post.update({
      where: { id: id },
      data: { isFeatured: !post.isFeatured },
    });
  } catch (error) {
    console.error("Error pinning post", error);
  }

  // redirect to admin page
  redirect("/admin");
}
