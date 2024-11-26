"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function updatePost(formData: FormData) {
  try {
    // form data
    const data = {
      id: formData.get("id")?.toString(),
      title: formData.get("title")?.toString(),
      description: formData.get("description")?.toString(),
      language: formData.get("language")?.toString(),
      tags: formData.getAll("tags").map((tag) => tag.toString()),
      content: formData.get("content")?.toString(),
      published: formData.get("published") === "on",
    };

    // update post
    await prisma.post.update({
      where: {
        id: data.id,
      },

      data: {
        title: data.title,
        description: data.description,
        language: data.language,
        tags: {
          set: [],
          connectOrCreate: data.tags.map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
        content: data.content,
        published: data.published,
      },
    });
  } catch (error) {
    console.error("Error updating post", error);
  }

  redirect("/admin");
}
