import BlogHeader from "@/components/Blog/BlogHeader";
import Markdown from "@/components/Markdown";
import formatDate from "@/lib/formatDate";
import { prisma } from "@/lib/prisma";
import { MDXRemote } from "next-mdx-remote/rsc";

async function getPost(id: string) {
  const post = await prisma.post.findUnique({
    where: { id: id },
    include: { tags: true },
  });
  return post;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return null;

  return (
    <>
      <BlogHeader
        pageTitle={post.title}
        pageDescription={post.description}
        date={formatDate(post.createdAt)}
        lang={post.language}
      />

      <Markdown>
        <MDXRemote source={post.content} />
      </Markdown>
    </>
  );
}
