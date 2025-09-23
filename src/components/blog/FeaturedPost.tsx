"use client";

import { IconPinnedFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function FeaturedPost({ featuredPost }: FeaturedPost) {
  if (!featuredPost) {
    return null;
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 3 } },
  };

  return (
    <motion.a
      variants={variants}
      initial="hidden"
      animate="visible"
      href={`/personal/blog/posts/${featuredPost.id}`}
      className="border-background-contrast mb-24 flex flex-col rounded-xl border p-10 text-center"
    >
      {/* pinned icon */}
      <IconPinnedFilled className="text-primary mb-5 self-center" />

      <div className="flex flex-col">
        {/* title */}
        <h2 className="text-2xl">{featuredPost.title}</h2>

        {/* description */}
        <p>{featuredPost.description}</p>

        {/* tags */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {featuredPost.tags.map(({ name, id }: Tag) => (
            <span key={id} className="text-tertiary px-2 py-1 capitalize">
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
