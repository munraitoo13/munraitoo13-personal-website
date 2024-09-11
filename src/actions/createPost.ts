"use server";

import { prisma } from "@/lib";

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
        author: {
          connect: {
            id: "3ed9caae-6490-486a-92db-c1805ae5edf6",
          },
        },
      },
    });

    console.log("Post created successfully");
  } catch (error) {
    console.error("Error creating post", error);
  }
}
