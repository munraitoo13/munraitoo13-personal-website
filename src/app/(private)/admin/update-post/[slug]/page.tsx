import { UpdatePostForm } from "@/components/admin/UpdatePostForm";
import { prisma } from "@/lib/prisma";

export default async function UpdatePost({ params }: Params) {
  const post = await prisma.post.findUnique({
    where: { id: params.slug },
    include: { tags: true },
  });
  const tags = await prisma.tag.findMany();

  if (!post) {
    return <div>Post not found</div>;
  }

  return <UpdatePostForm tags={tags} post={post} />;
}
