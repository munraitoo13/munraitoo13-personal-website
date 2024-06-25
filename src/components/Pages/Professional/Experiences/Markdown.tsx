"use client";

import { motion } from "framer-motion";
import Content from "./content.mdx";

export default function Markdown() {
  return (
    <motion.div
      className="prose lg:prose-lg"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      <Content />
    </motion.div>
  );
}
