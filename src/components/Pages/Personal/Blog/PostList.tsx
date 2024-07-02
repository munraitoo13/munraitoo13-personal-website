import SinglePost from "./SinglePost";
import { getAllPosts } from "@/app/api/posts";
import { formatDate } from "@/app/lib/utils";

export default async function PostList() {
  const posts = await getAllPosts();
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => {
        return (
          <SinglePost
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
