"use server";

import { prisma } from "@/app/lib/prisma";

export async function getTags() {
  const tags = await prisma.tag.findMany();
  return tags;
}

export async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}
