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
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.25 } },
    hover: { x: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-12"
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
          <div className="divider--card"></div>

          <div className="flex w-full flex-col gap-2">
            {/* title */}
            <h2 className="text-2xl text-primary">{title}</h2>

            {/* description */}
            <p>{description}</p>

            {/* tags */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {tags.map(({ name, id }: Tag) => (
                <span key={id} className="capitalize">
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
