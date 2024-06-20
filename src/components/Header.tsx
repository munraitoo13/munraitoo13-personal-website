"use client";
import { motion } from "framer-motion";

export default function Header({
  pageTitle,
  pageDescription,
  cathegory,
}: {
  pageTitle: string;
  pageDescription: string;
  cathegory: string;
}) {
  return (
    <header className="flex w-full flex-col justify-center gap-5 pb-20 pt-48">
      <div>
        {/* red above title */}
        <motion.p
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-lg font-bold text-red-600"
        >
          {cathegory}
        </motion.p>

        {/* title */}
        <motion.h1
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
          className="text-6xl font-bold"
        >
          {pageTitle}
        </motion.h1>
      </div>

      {/* description */}
      <motion.p
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 0.75, transition: { delay: 0.2 } }}
        className="text-lg"
      >
        {pageDescription}
      </motion.p>
    </header>
  );
}
