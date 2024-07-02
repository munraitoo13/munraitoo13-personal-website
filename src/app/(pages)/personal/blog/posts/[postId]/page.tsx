import Content from "./content.mdx";
import BlogHeader from "@/components/Pages/Personal/Blog/BlogHeader";
import Markdown from "@/components/Pages/Markdown";
import { formatDate } from "@/app/lib/utils";
import { getPost } from "@/app/api/posts";

export default async function Post({ params }: { params: { postId: number } }) {
  const post = await getPost(Number(params.postId));

  return (
    <>
      {post ? (
        <>
          <BlogHeader
            cathegory="Personal"
            pageTitle={post.title}
            pageDescription={post.desc}
            lang={post.lang}
            date={formatDate(post.date)}
          />
          <Markdown>
            <Content />
          </Markdown>
        </>
      ) : (
        <>
          <BlogHeader
            cathegory="Womp womp..."
            pageTitle="Post not found."
            pageDescription="This post does not exist."
            lang="Womp"
            date="Womp..."
          />
        </>
      )}
    </>
  );
}
