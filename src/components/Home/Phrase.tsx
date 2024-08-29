"use client";

import { motion } from "framer-motion";

export default function Phrase() {
  return (
    <motion.blockquote
      className="flex w-full flex-col gap-1 text-center text-4xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 },
      }}
    >
      <div className="flex justify-center">
        <span>
          There are <span className="italic underline">three</span> responses to
          a product:
        </span>
      </div>

      <div className="italic">
        <span>— yes, no, and </span>
        <span className="font-bold text-white">WOW! </span>
        <span>—</span>
      </div>

      <div className="flex items-center justify-center gap-3">
        <span>Wow is </span>
        <span className="rounded-xl bg-neutral-900/25 px-2 py-1 font-bold text-white">
          the one I aim for.
        </span>
      </div>
    </motion.blockquote>
  );
}
