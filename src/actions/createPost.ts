"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const formSchema = z.object({
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

export async function createPost(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    const parsedData = formSchema.parse({
      ...data,
      tags: formData.getAll("tags"),
    });

    await prisma.post.create({
      data: {
        title: parsedData.title,
        description: parsedData.description,
        language: parsedData.language,
        tags: {
          connectOrCreate: (parsedData.tags || []).map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
        content: parsedData.content,
        published: parsedData.published,
      },
    });

    return { success: true, message: "Post created successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error);
      return { success: false, message: "Invalid form data" };
    }

    console.error("Error creating post:", error);
    return { success: false, message: "Failed to create post" };
  }
}
