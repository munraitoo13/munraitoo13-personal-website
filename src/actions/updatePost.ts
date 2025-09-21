"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type FormData = {
  id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  content: string;
  published: boolean;
};

const formSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  language: z.string().min(1, "Language is required"),
  tags: z.array(z.string()).optional(),
  content: z.string().min(1, "Content is required"),
  published: z.boolean().optional(),
});

export async function updatePost(data: FormData) {
  try {
    const parsedData = formSchema.parse(data);

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

    revalidatePath("/admin");
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
