"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function updatePost(formData: FormData) {
  try {
    // form data
    const data = {
      id: formData.get("id")?.toString(),
      language: formData.get("language")?.toString(),
      published: formData.get("published") === "on",
      title: formData.get("title")?.toString(),
      tags: formData.getAll("tags").map((tag) => tag.toString()),
      description: formData.get("description")?.toString(),
      content: formData.get("content")?.toString(),
    };

    // update post
    await prisma.post.update({
      where: {
        id: data.id,
      },

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
    console.error("Error updating post", error);
  }

  redirect("/admin");
}
