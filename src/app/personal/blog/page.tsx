import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import Content from "./content.mdx";
import Posts from "@/components/Blog/Posts";
import formatDate from "@/lib/formatDate";
export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog",
};

export default async function Page() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { tags: true },
  });

  return (
    <>
      <Header
        category="Personal"
        pageTitle="Blog"
        pageDescription="All of my blog posts in one place."
      />

      <div className="flex flex-col gap-10">
        <Markdown>
          <Content />
        </Markdown>

        <div className="flex flex-col gap-5">
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
