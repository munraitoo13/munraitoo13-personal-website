import { PostForm } from "@/components/admin/PostForm";
import { prisma } from "@/lib/prisma";

export default async function NewPost() {
  const tags = await prisma.tag.findMany();

  return <PostForm tags={tags} />;
}
