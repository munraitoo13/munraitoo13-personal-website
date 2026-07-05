import { PostForm } from "@/components/admin/PostForm";
import { prisma } from "@/lib/prisma";
import { requireAuthenticatedAdmin } from "@/utils/auth";

export default async function NewPost() {
  await requireAuthenticatedAdmin();

  const tags = await prisma.tag.findMany();

  return <PostForm tags={tags} />;
}
