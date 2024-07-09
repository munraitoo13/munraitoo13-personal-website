import BlogHeader from "@/app/(pages)/personal/blog/_components/BlogHeader";
import { formatDate } from "@/app/lib/utils";
import { getPost } from "@/app/api/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Markdown from "@/app/(pages)/(routes)/_components/Markdown";
import TableOfContents from "@/app/(pages)/(routes)/_components/TableOfContents";

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
