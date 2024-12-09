"use client";

import { setUserLocale } from "@/utils/userLocale";
import { LANGUAGES } from "@/constants/constants";
import { motion } from "framer-motion";

export function Language() {
  const variants = {
    default: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div className="mt-10 flex gap-5">
      {LANGUAGES.map(({ Flag, title, locale }) => (
        <motion.div
          key={locale}
          title={title}
          variants={variants}
          whileHover="hover"
          whileTap="tap"
          className="cursor-pointer"
        >
          <Flag onClick={() => setUserLocale(locale)} className="w-8" />
        </motion.div>
      ))}
    </div>
  );
}
