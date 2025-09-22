"use client";

import { getQualities } from "@/constants/constants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Qualities() {
  const t = useTranslations("HomePage");
  const qualities = getQualities(t);

  const variants = {
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "anticipate" },
    },
  };

  return (
    <motion.section
      className="container mx-auto flex flex-col gap-4 pb-24 pt-24"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item} className="flex w-96 flex-col gap-2">
        <h2 className="text-2xl font-medium">{t("myQualities")}</h2>
        <p>{t("myQualitiesDesc")}</p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-4">
        {qualities.map(({ title, description, image }) => (
          <motion.div
            variants={item}
            key={title}
            className="flex flex-col items-center gap-4 text-center"
          >
            <Image
              src={image}
              alt={title}
              className="h-[500px] w-full rounded-xl object-cover transition-opacity duration-500 hover:opacity-75"
              placeholder="blur"
            />

            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-primary">{title}</h3>

              <p>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
