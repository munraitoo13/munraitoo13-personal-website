"use client";

import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <div className="flex w-1/2 flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      >
        <h1 className="mb-5 text-6xl font-bold">
          What's up!
          <br />
          My name is <span className="text-red-600">Augusto</span>.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.2 },
        }}
      >
        <p className="text-lg">
          <span className="opacity-75">
            Also known as munraitoo13, I'm a passionate
          </span>
          <b> Software Engineer </b>
          <span className="opacity-75">from Brazil!</span>
        </p>
      </motion.div>
    </div>
  );
}
