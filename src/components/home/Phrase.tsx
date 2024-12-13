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
      {/* simple */}
      <span className="italic">{t("simple")} </span>

      {/* yet */}

      <span>
        {t("yet")}{" "}
        <span className="text-primary font-medium">{t("stunning")}</span>
      </span>

      {/* inside */}
      <span className="text-primary w-fit rounded-md bg-background-contrast px-2 py-1 font-medium">
        {t("insideAndOut")}
      </span>
    </motion.blockquote>
  );
}
