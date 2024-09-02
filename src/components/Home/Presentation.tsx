"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col gap-5">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-6xl font-bold text-white"
      >
        {t("greetings")}
        <br />
        {t("presentation")}
        <span className="text-red-600">{t("name")}</span>.
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
        <span>{t("description")}</span>
        <b> {t("profession")} </b>
        <span>{t("descriptionLocation")}</span>
      </motion.p>
    </div>
  );
}
