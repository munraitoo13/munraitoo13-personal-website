"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TableOfContents() {
  return (
    <motion.nav
      className="h-fit rounded-xl bg-neutral-900 p-5"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}
    >
      <h2 className="text-lg font-bold">Table of Contents</h2>
    </motion.nav>
  );
}
