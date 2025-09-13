"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const formSchema = z.object({
  id: z.cuid(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  language: z.string().min(1, "Language is required"),
  tags: z.array(z.string()).optional(),
  content: z.string().min(1, "Content is required"),
  published: z
    .string()
    .transform((value) => value === "on")
    .optional(),
});

export async function updatePost(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    const parsedData = formSchema.parse({
      ...data,
      tags: formData.getAll("tags"),
    });

    const post = await prisma.post.findUnique({
      where: { id: parsedData.id },
      include: { tags: true },
    });

    if (!post) return { success: false, message: "Post not found" };

    const newTags = parsedData.tags || [];
    const existingTags = post.tags.map((tag) => tag.name);

    const tagsToDisconnect = existingTags.filter(
      (tag) => !newTags.includes(tag),
    );
    const tagsToConnectOrCreate = newTags.map((tag) => ({
      where: { name: tag },
      create: { name: tag },
    }));

    await prisma.post.update({
      where: {
        id: parsedData.id,
      },

      data: {
        title: parsedData.title,
        description: parsedData.description,
        language: parsedData.language,
        tags: {
          disconnect: tagsToDisconnect.map((tag) => ({ name: tag })),
          connectOrCreate: tagsToConnectOrCreate,
        },
        content: parsedData.content,
        published: parsedData.published,
      },
    });

    return { success: true, message: "Post updated successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error);
      return { success: false, message: "Failed to update post" };
    }

    console.error("Unexpected error:", error);
    return { success: false, message: "Failed to update post" };
  }
}
