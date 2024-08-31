"use server";

import { prisma } from "@/lib/prisma";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      language: formData.get("language") as string,
      published: formData.get("published") === "on",
      title: formData.get("title") as string,
      tags: {
        connect: formData.getAll("tags").map((tag) => ({ id: tag as string })),
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
}

export async function deletePost(formData: FormData) {
  try {
    // delete post
    await prisma.post.delete({
      where: {
        id: formData.get("id") as string,
      },
    });
  } catch (error) {
    console.error("Error deleting post", error);
  }
}

export async function updatePost(formatData: FormData) {
  await prisma.post.update({
    where: {
      id: formatData.get("id") as string,
    },

    data: {
      language: formatData.get("language") as string,
      published: formatData.get("published") === "on",
      title: formatData.get("title") as string,
      tags: {
        connect: formatData
          .getAll("tags")
          .map((tag) => ({ id: tag as string })),
      },
      description: formatData.get("description") as string,
      content: formatData.get("content") as string,
    },
  });
}
