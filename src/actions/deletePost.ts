"use server";

import { prisma } from "@/lib";

export async function deletePost(formData: FormData) {
  try {
    // delete post
    await prisma.post.delete({
      where: {
        id: formData.get("id") as string,
      },
    });

    console.log("Post deleted successfully");
  } catch (error) {
    console.error("Error deleting post", error);
  }
}
