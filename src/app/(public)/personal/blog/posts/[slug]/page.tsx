import { BlogHeader } from "@/components/blog/BlogHeader";
import { Markdown } from "@/components/common/Markdown";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/utils/formatDate";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.slug },
  });

  const { title, description, createdAt, language, content } = post!;

  return (
    <>
      <BlogHeader
        title={title}
        description={description}
        date={formatDate(createdAt)}
        language={language}
      />

      <Markdown>
        <MDXRemote source={content} />
      </Markdown>
    </>
  );
}
