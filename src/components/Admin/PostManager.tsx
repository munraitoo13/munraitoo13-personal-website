"use client";

import { getPosts } from "@/lib/db";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
}

export default function PostManager() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getPosts();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  return (
    <section className="w-full">
      {posts.map((post) => (
        <div key={post.id} className="flex w-full flex-col gap-5">
          {/* post */}
          <a
            href={`/personal/blog/posts/${post.id}`}
            target="_blank"
            className=""
          >
            {post.title}
          </a>

          {/* buttons */}
          <div className="flex gap-5">
            <button className="cursor-pointer">Edit</button>
            <button className="cursor-pointer">Delete</button>
          </div>
        </div>
      ))}
    </section>
  );
}
