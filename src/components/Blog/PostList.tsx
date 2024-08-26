import SinglePost from "@/components/Blog/SinglePost";
import formatDate from "@/lib/formatDate";
import { prisma } from "@/lib/prisma";

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { tags: true },
  });
  return posts;
}

export default async function PostList() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-3 pt-10">
      {posts.map((post: any) => {
        return (
          <SinglePost
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
  );
}
