"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Phrase() {
  const t = useTranslations("HomePage");
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.8 } },
  };

  return (
    <motion.blockquote
      variants={variants}
      initial="hidden"
      animate="visible"
      className="font-light mx-auto mt-48 flex w-fit flex-col gap-1 text-3xl md:text-5xl"
    >
      {/* simple */}
      <span className="italic">{t("simple")} </span>

      {/* yet */}
      <div className="flex items-center gap-5">
        <span>
          {t("yet")} <span className="text-primary">{t("stunning")}</span>
        </span>
      </div>

      {/* inside */}
      <span className="w-fit rounded-md bg-secondary/50 px-2 py-1 text-primary">
        {t("insideAndOut")}
      </span>
    </motion.blockquote>
  );
}
