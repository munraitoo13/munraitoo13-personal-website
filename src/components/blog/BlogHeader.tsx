"use client";

import { motion } from "framer-motion";

export function BlogHeader({ title, description, language, date }: BlogHeader) {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
  };
  const items = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.header
      variants={variants}
      initial="hidden"
      animate="visible"
      className="mb-24 mt-48 flex flex-col gap-3"
    >
      {/* date and language */}
      <motion.p variants={items}>
        {date}, {language}.
      </motion.p>

      {/* title */}
      <motion.h1 variants={items} className="text-3xl text-primary">
        {title}
      </motion.h1>

      {/* description */}
      <motion.p variants={items} className="text-xl">
        {description}
      </motion.p>
    </motion.header>
  );
}
