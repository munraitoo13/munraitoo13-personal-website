import BlogHeader from "@/components/Blog/BlogHeader";
import Markdown from "@/components/Markdown";
import formatDate from "@/lib/formatDate";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/lib/db";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
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
