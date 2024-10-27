import { BlogHeader } from "@/components/blog/BlogHeader";
import { Markdown } from "@/components/common/Markdown";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/utils/formatDate";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: Params) {
  const post = await prisma.post.findUnique({
    where: { id: params.slug },
  });
  if (!post) {
    return (
      <BlogHeader
        title="Post not found"
        description="The post you are looking for does not exist."
        date={await formatDate(new Date())}
        language={"Easter Egg!"}
      />
    );
  }

  const { title, description, createdAt, language, content } = post;

  return (
    <>
      <BlogHeader
        title={title}
        description={description}
        date={await formatDate(createdAt)}
        language={language}
      />

      <Markdown>
        <MDXRemote source={content} />
      </Markdown>
    </>
  );
}
