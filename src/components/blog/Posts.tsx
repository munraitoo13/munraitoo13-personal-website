"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Posts({ posts }: Posts) {
  const t = useTranslations("Blog");

  const variants = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const items = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "anticipate" },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex flex-1 flex-col gap-12"
    >
      {posts.map(({ id, title, description, tags }) => (
        <motion.a
          variants={items}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex"
          href={`/personal/blog/posts/${id}`}
          key={id}
        >
          <div className="flex w-full flex-col">
            {/* title */}
            <h2 className="text-2xl">{title}</h2>

            {/* description */}
            <p>{description}</p>

            {/* tags */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {tags.map(({ name, id }: Tag) => (
                <span key={id} className="text-tertiary capitalize">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
