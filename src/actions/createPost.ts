"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  try {
    // form data
    const data = {
      title: formData.get("title")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
      language: formData.get("language")?.toString() ?? "",
      tags: formData.getAll("tags").map((tag) => tag.toString()),
      content: formData.get("content")?.toString() ?? "",
      published: formData.get("published")?.toString() === "on",
    };

    // create post
    await prisma.post.create({
      data: {
        title: data.title,
        description: data.description,
        language: data.language,
        tags: {
          connect: data.tags.map((tag) => ({ id: tag })),
        },
        content: data.content,
        published: data.published,
      },
    });
  } catch (error) {
    console.error("Error creating a post:", error);
  }

  // redirect to admin page
  redirect("/admin");
}
