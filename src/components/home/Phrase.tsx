"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Phrase() {
  const t = useTranslations("HomePage");
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.blockquote
      variants={variants}
      initial="hidden"
      whileInView="visible"
      className="mx-auto flex w-fit flex-col gap-1 py-24 text-center text-3xl md:text-5xl"
    >
      <span className="italic">{t("simple")} </span>

      <span>
        {t("yet")} <b className="">{t("stunning")}</b>
      </span>

      <b className="bg-background-contrast w-fit rounded-xl px-2 py-1">
        {t("insideAndOut")}
      </b>
    </motion.blockquote>
  );
}
