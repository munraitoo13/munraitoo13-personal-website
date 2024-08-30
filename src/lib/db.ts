"use server";

import { prisma } from "@/lib/prisma";

// gets all tags from db
export async function getTags() {
  try {
    const tags = await prisma.tag.findMany();
    return tags;
  } catch (error) {
    throw new Error();
  }
}

// gets all posts from db
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    throw new Error();
  }
}

// gets a single post from db based on slug
export async function getPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: id },
      include: { tags: true },
    });
    return post;
  } catch (error) {
    throw new Error();
  }
}
