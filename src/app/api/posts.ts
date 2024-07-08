import { prisma } from "@/app/lib/prisma";

export async function getAllPosts() {
  const posts = await prisma.posts.findMany({
    include: { tags: true },
    where: { posted: true },
  });
  return posts;
}

export async function getPost(id: number) {
  const post = await prisma.posts.findUnique({
    where: { id: id },
  });
  return post;
}
