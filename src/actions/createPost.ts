"use server";

import { prisma } from "@/lib/prisma";

export async function createPost(formData: FormData) {
  try {
    await prisma.post.create({
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
    console.log("Post created successfully.");
  } catch (error) {
    console.error("Error creating a post: ", error);
  }
}
