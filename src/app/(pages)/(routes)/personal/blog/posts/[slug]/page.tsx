import BlogHeader from "@/app/(pages)/(routes)/personal/blog/_components/BlogHeader";
import formatDate from "@/app/(pages)/(routes)/personal/blog/_lib/formatDate";
import Markdown from "@/app/(pages)/(routes)/_components/Markdown";
import { MDXRemote } from "next-mdx-remote/rsc";
import { prisma } from "@/app/_lib/prisma";

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
