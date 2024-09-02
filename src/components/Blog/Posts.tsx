"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconGhost2Filled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import formatDate from "@/lib/formatDate";

type Tag = {
  name: string;
  id: string;
};

type Post = {
  id: string;
  title: string;
  description: string;
  language: string;
  createdAt: string;
  tags: Tag[];
};

// SinglePost component
export default function Posts() {
  const t = useTranslations("Blog");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await fetch("/api/posts");
    setPosts(await res.json());
  }

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ x: 5 }}
          className="flex flex-col gap-10 rounded-xl bg-neutral-900/25 p-10"
          href={`/personal/blog/posts/${post.id}`}
        >
          {/* post itself */}
          <div className="flex flex-col gap-3">
            {/* date and lang */}
            <div className="flex items-center gap-5 text-red-600">
              {/* date */}
              <small>{formatDate(post.createdAt)}</small>
            </div>

            {/* title */}
            <h2 className="text-4xl font-bold text-white">{post.title}</h2>

            {/* description */}
            <p className="text-xl">{post.description}</p>

            {/* tags */}
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag: Tag) => (
                <span
                  key={tag.id}
                  className="rounded-full bg-neutral-900/25 px-3 py-1"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* check it and lang */}
          <div className="flex items-center gap-5">
            {/* check it */}
            <div className="flex w-fit items-center gap-3 rounded-full bg-neutral-900/25 px-5 py-3 font-bold">
              <IconGhost2Filled />
              {t("check")}
            </div>

            {/* lang */}
            <small>{post.language}</small>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
