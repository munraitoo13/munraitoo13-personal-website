"use client";

import { motion } from "framer-motion";

export default function Phrase() {
  return (
    <motion.div
      className="w-full py-20 text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 1 },
      }}
    >
      <blockquote className="flex flex-col space-y-1 text-2xl">
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
      </blockquote>
    </motion.div>
  );
}
