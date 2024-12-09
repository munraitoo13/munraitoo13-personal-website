"use client";

import { useTranslations } from "next-intl";
import { getPhraseDescription } from "@/constants/constants";
import { motion } from "framer-motion";

export function PhraseDescription() {
  const t = useTranslations("HomePage");
  const phraseDescriptions = getPhraseDescription(t);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col gap-12 pt-48"
    >
      {phraseDescriptions.map(({ question, title, description }) => (
        <div className="flex flex-col gap-2" key={question}>
          <motion.p variants={item}>{question}</motion.p>

          <motion.h3 variants={item} className="text-xl">
            {title}
          </motion.h3>

          <motion.p variants={item}>{description}</motion.p>
        </div>
      ))}
    </motion.section>
  );
}
