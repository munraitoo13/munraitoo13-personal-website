import BlogHeader from "@/components/Pages/Personal/Blog/BlogHeader";
import { formatDate } from "@/app/lib/utils";
import { getPost } from "@/app/api/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Post({ params }: { params: { slug: string } }) {
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

      <MDXRemote source={post.post} />
    </>
  );
}
