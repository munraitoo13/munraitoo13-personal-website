import BlogHeader from "@/components/Blog/BlogHeader";
import Markdown from "@/components/common/Markdown";
import { formatDate } from "@/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { prisma } from "@/lib";

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
