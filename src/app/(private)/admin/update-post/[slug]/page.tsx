import { PostForm } from "@/components/admin/PostForm";
import { prisma } from "@/lib/prisma";
import { requireAuthenticatedAdmin } from "@/utils/auth";

export default async function UpdatePost({
  params,
}: {
  params: { slug: string };
}) {
  await requireAuthenticatedAdmin();

  const post = await prisma.post.findUnique({
    where: { id: params.slug },
    include: { tags: true },
  });
  const tags = await prisma.tag.findMany();

  if (!post) {
    return <div>Post not found</div>;
  }

  return <PostForm tags={tags} post={post} />;
}
