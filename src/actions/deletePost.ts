"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deletePost(formData: FormData) {
  try {
    // form data
    const data = {
      id: formData.get("id")?.toString(),
    };

    // delete post
    await prisma.post.delete({
      where: {
        id: data.id,
      },
    });
  } catch (error) {
    console.error("Error deleting a post:", error);
  }

  // redirect to admin page
  redirect("/admin");
}
