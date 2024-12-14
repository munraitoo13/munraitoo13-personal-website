"use client";

import { useHeadings } from "@/hooks/useHeadings";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function TableOfContents() {
  const t = useTranslations("TableOfContents");
  const headings = useHeadings();

  const variants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 1, ease: "anticipate" },
    },
  };

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex h-fit w-full flex-col gap-5 text-nowrap rounded-xl border border-background-contrast p-10 md:w-fit"
    >
      <h2 className="text-xl font-medium text-primary">{t("contents")}</h2>

      {headings.map(({ text, id, headingLevel }) => (
        <a
          key={text}
          className={`${headingLevel === "H2" ? "font-medium text-primary" : "ml-3"} transition-colors duration-500 hover:text-accent`}
          href={`#${id}`}
        >
          {text}
        </a>
      ))}
    </motion.nav>
  );
}
