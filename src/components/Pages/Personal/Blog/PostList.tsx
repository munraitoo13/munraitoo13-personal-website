import { prisma } from "@/app/lib/prisma";
import SinglePost from "./SinglePost";

export async function getStaticProps() {
  const posts = await prisma.post.findMany({
    select: {
      title: true,
      date: true,
      desc: true,
      lang: true,
      tags: true,
      id: true,
    },
  });
  return posts;
}

export default async function PostList() {
  const posts = await getStaticProps();
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => {
        return (
          <SinglePost
            title={post.title}
            date={post.date.toString()}
            desc={post.desc}
            lang={post.lang}
            tags={post.tags}
            id={post.id}
          />
        );
      })}
    </div>
  );
}
