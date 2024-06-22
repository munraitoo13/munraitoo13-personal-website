"use client";

import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <div className="flex flex-col gap-5">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-6xl font-bold"
      >
        What's up!
        <br />
        My name is <span className="text-red-600">Augusto</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 },
        }}
        className="text-lg"
      >
        <span className="opacity-75">
          Also known as munraitoo13, I'm a passionate
        </span>
        <b> Software Engineer </b>
        <span className="opacity-75">from Brazil!</span>
      </motion.p>
    </div>
  );
}
