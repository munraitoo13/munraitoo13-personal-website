"use client";
import { motion } from "framer-motion";
import Content from "@/app/(pages)/professional/skills-and-tools/content.mdx";

export default function () {
  return (
    <>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        className=""
      >
        <Content />
      </motion.div>
    </>
  );
}
