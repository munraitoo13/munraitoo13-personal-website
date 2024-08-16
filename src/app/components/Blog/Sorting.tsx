"use client";
import { motion } from "framer-motion";

export default function TableOfContents() {
  return (
    <motion.nav
      className="mb-10 flex h-fit flex-col gap-5 rounded-xl bg-neutral-900 p-5 lg:w-1/4"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      <h2 className="text-xl font-bold">Sorting</h2>

      <hr className="border-neutral-600" />

      <div className="flex flex-col gap-3">
        <p>eu quero go</p>
      </div>
    </motion.nav>
  );
}
