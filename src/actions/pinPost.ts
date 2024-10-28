"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function pinPost(formData: FormData) {
  try {
    // form data
    const data = {
      id: formData.get("id")?.toString(),
    };

    // get the post
    const post = await prisma.post.findUnique({
      where: { id: data.id },
    });
    if (!post) {
      throw new Error("Post not found");
    }

    // toggle the isFeatured
    await prisma.post.update({
      where: { id: data.id },
      data: { isFeatured: !post.isFeatured },
    });
  } catch (error) {
    console.error("Error pinning post", error);
  }

  // redirect to admin page
  redirect("/admin");
}
