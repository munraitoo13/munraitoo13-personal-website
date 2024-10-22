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
    if (error instanceof Error) {
      console.error("Error creating a post: ", error.message);
    } else {
      console.error("Unexpected error: ", error);
    }
  }

  redirect("/admin");
}
