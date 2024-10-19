"use server";

import { prisma } from "@/lib/prisma";

export async function updatePost(formData: FormData) {
  try {
    await prisma.post.update({
      where: {
        id: formData.get("id") as string,
      },

      data: {
        language: formData.get("language") as string,
        published: formData.get("published") === "on",
        title: formData.get("title") as string,
        tags: {
          connect: formData
            .getAll("tags")
            .map((tag) => ({ id: tag as string })),
        },
        description: formData.get("description") as string,
        content: formData.get("content") as string,
      },
    });
  } catch (error) {
    console.error("Error updating post", error);
  }
}
