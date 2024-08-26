import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import Content from "./content.mdx";
import Posts from "@/components/Blog/Posts";
import formatDate from "@/lib/formatDate";
import getAllPosts from "@/lib/posts/getAllPosts";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <Header
        cathegory="Personal"
        pageTitle="Blog"
        pageDescription="All of my blog posts in one place."
      />

      <div className="flex flex-col gap-3">
        <Markdown>
          <Content />
        </Markdown>

        <div className="flex flex-col gap-3 pt-10">
          {posts.map((post: any) => {
            return (
              <Posts
                key={post.id}
                title={post.title}
                date={formatDate(post.createdAt)}
                desc={post.description}
                lang={post.language}
                tags={post.tags}
                id={post.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
