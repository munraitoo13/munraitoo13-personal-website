import { prisma } from "@/app/lib/prisma";

export async function getAllPosts() {
  const posts = await prisma.post.findMany({
    where: { id: { not: 0 } },
  });
  return posts;
}

export async function getPost(id: number) {
  const post = await prisma.post.findUnique({
    where: { id: id },
  });
  return post;
}
