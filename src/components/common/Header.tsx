"use client";

import { motion } from "framer-motion";

export function Header({ pageTitle, pageDescription }: Header) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
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
      {/* title */}
      <motion.h1 variants={item} className="text-5xl">
        {pageTitle}
      </motion.h1>

      {/* description */}
      <motion.p variants={item} className="text-xl">
        {pageDescription}
      </motion.p>
    </motion.header>
  );
}
