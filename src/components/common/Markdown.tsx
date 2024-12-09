"use client";

import { motion } from "framer-motion";

export function Markdown({ children }: { children: React.ReactNode }) {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25, delay: 0.2 } },
  };

  return (
    <motion.div
      className="mdx-content"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
