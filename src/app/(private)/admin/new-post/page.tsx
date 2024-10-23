import { NewPostForm } from "@/components/admin/NewPostForm";
import { prisma } from "@/lib/prisma";

export default async function NewPost() {
  const tags = await prisma.tag.findMany();

  return <NewPostForm tags={tags} />;
}
