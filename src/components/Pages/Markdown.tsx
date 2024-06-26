"use client";
import { motion } from "framer-motion";

export default function Markdown({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="prose prose-sm prose-neutral prose-invert max-w-none lg:w-3/4 lg:pr-10"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}
