import BlogHeader from "@/app/(pages)/(routes)/personal/blog/_components/BlogHeader";
import formatDate from "@/app/(pages)/(routes)/personal/blog/_lib/formatDate";
import Markdown from "@/app/(pages)/(routes)/_components/Markdown";
import { MDXRemote } from "next-mdx-remote/rsc";
import { prisma } from "@/app/_lib/prisma";

async function getPost(id: number) {
  const post = await prisma.post.findUnique({
    where: { id },
    include: { tags: true },
  });
  return post;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(Number(params.slug));

  if (!post) return null;

  return (
    <>
      <BlogHeader
        cathegory={post.cathegory}
        pageTitle={post.title}
        pageDescription={post.desc}
        date={formatDate(post.date)}
        lang={post.lang}
      />

      <Markdown>
        <MDXRemote source={post.post} />
      </Markdown>
    </>
  );
}
