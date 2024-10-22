"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  try {
    // form data
    const data = {
      language: formData.get("language")?.toString() ?? "",
      published: formData.get("published")?.toString() === "on",
      title: formData.get("title")?.toString() ?? "",
      tags: formData.getAll("tags").map((tag) => tag.toString()),
      description: formData.get("description")?.toString() ?? "",
      content: formData.get("content")?.toString() ?? "",
    };

    // create post
    await prisma.post.create({
      data: {
        language: data.language,
        published: data.published,
        title: data.title,
        tags: {
          connect: data.tags.map((tag) => ({ id: tag })),
        },
        description: data.description,
        content: data.content,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating a post:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }

  redirect("/admin");
}
