"use client";

import { getPhraseDescription } from "@/constants/constants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function PhraseDescription() {
  const t = useTranslations("HomePage");
  const phraseDescriptions = getPhraseDescription(t);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "anticipate" },
    },
  };

  return (
    <section className="flex flex-col gap-12 py-24">
      {phraseDescriptions.map(({ question, title, description }) => (
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-2"
          key={question}
        >
          <p className="text-accent">{question}</p>

          <h3 className="text-lg">{title}</h3>

          <p>{description}</p>
        </motion.div>
      ))}
    </section>
  );
}
