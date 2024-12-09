"use client";

import { IconPinnedFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function FeaturedPost({ featuredPost }: FeaturedPost) {
  const t = useTranslations("Blog");

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
      className="mb-12 flex w-full flex-col rounded-md border border-secondary/50 p-10 text-center"
    >
      {/* pinned icon */}
      <IconPinnedFilled className="mb-10 self-center text-primary" />

      <div className="flex flex-col">
        {/* title */}
        <h2 className="text-2xl">{featuredPost.title}</h2>

        {/* description */}
        <p>{featuredPost.description}</p>

        {/* tags */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {featuredPost.tags.map(({ name, id }: Tag) => (
            <span key={id} className="capitalize">
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
