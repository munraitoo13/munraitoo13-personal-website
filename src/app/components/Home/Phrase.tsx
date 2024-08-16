"use client";

import { motion } from "framer-motion";

export default function Phrase() {
  return (
    <motion.blockquote
      className="flex w-full flex-col gap-1 text-center text-2xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.6 },
      }}
    >
      <div className="flex justify-center">
        <span className="opacity-75">
          There are <span className="italic">three responses</span> to a
          product:
        </span>
      </div>

      <div>
        <span className="opacity-75">— yes, no, and </span>
        <span className="font-bold">WOW! </span>
        <span className="opacity-75">—</span>
      </div>

      <div>
        <span className="opacity-75">Wow is the one </span>
        <span className="rounded-xl bg-neutral-900 p-1 font-bold">
          I aim for.
        </span>
      </div>
    </motion.blockquote>
  );
}
