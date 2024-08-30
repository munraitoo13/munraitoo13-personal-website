"use client";

import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export default function PostManager() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await fetch("/api/posts");
    const posts = await response.json();
    setPosts(posts);
  }

  return (
    <section className="w-full">
      {posts.map((post) => (
        <div key={post.id} className="flex w-full flex-col gap-5">
          {/* post */}
          <a href={`/personal/blog/posts/${post.id}`} target="_blank">
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
