"use client";

import { useHeadings } from "@/hooks/useHeadings";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function TableOfContents() {
  const t = useTranslations("TableOfContents");
  const headings = useHeadings();

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, delay: 0.2 } },
  };
  const item = {
    default: { x: 0, transition: { duration: 0.25 } },
    hover: { x: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex h-fit w-full flex-col gap-5 text-nowrap rounded-xl border border-secondary/50 p-10 md:w-fit"
    >
      <h2 className="text-xl">{t("contents")}</h2>

      {headings.map(({ text, id, headingLevel }) => (
        <motion.a
          variants={item}
          animate="default"
          whileHover="hover"
          whileTap="tap"
          key={text}
          className={`${headingLevel === "H2" ? "text-lg text-primary" : "ml-3"} `}
          href={`#${id}`}
        >
          {text}
        </motion.a>
      ))}
    </motion.nav>
  );
}
