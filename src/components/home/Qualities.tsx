"use client";

import { useTranslations } from "next-intl";
import { getQualities } from "@/constants/constants";
import { motion } from "framer-motion";

export function Qualities() {
  const t = useTranslations("HomePage");
  const qualities = getQualities(t);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 gap-12 pt-48 md:grid-cols-3"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {qualities.map(({ title, description }) => (
        <motion.div variants={item} key={title} className="flex flex-col gap-2">
          <h3 className="text-xl">{title}</h3>
          <p>{description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
