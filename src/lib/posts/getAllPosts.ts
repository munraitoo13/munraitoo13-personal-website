import { prisma } from "@/lib/prisma";

export default async function getAllPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { tags: true },
  });

  return posts;
}
