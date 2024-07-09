import SinglePost from "./SinglePost";
import { formatDate } from "@/app/lib/utils";
import { prisma } from "@/app/lib/prisma";

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    where: { posted: true },
    include: { tags: true },
  });
  return posts;
}

export default async function PostList() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-3">
      {posts.map((post: any) => {
        return (
          <SinglePost
            key={post.id}
            title={post.title}
            date={formatDate(post.date)}
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
