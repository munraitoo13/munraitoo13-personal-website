"use server";

import { prisma } from "@/lib/prisma";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function newPost(formData: FormData) {
  const jwt = cookies().get("token")?.value;
  if (!jwt) {
    return;
  }

  const { payload } = await jwtVerify(jwt, key);

  await prisma.post.create({
    data: {
      language: formData.get("language") as string,
      published: formData.get("published") === "on",
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      tags: {
        connect: formData.getAll("tags").map((tag) => ({ id: tag as string })),
      },
      author: {
        connect: { name: payload.name as string, id: payload.id as string },
      },
    },
  });
}
