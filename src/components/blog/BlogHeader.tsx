"use client";

import { motion } from "framer-motion";

export function BlogHeader({ title, description, language, date }: BlogHeader) {
  const variants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const items = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "anticipate" },
    },
  };

  return (
    <motion.header
      variants={variants}
      initial="hidden"
      animate="visible"
      className="layout mt-48 flex flex-col gap-3"
    >
      {/* date and language */}
      <motion.p variants={items}>
        {date}, {language}.
      </motion.p>

      {/* title */}
      <motion.h1 variants={items} className="text-primary text-5xl font-medium">
        {title}
      </motion.h1>

      {/* description */}
      <motion.p variants={items}>{description}</motion.p>

      <div className="divider my-12"></div>
    </motion.header>
  );
}
