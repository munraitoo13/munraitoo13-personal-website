import { Post } from "@/types/types";
import Link from "next/link";

export async function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="max-w-4xl flex-1 space-y-12">
      {posts.map((post) => (
        <Link
          className="flex items-center gap-8"
          href={`/personal/blog/posts/${post.id}`}
          key={post.id}
        >
          <hr className="border-background-contrast hidden w-12 md:inline" />

          <div className="flex-1">
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.description}</p>
            <div className="mt-4 flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag.id} className="text-tertiary">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
