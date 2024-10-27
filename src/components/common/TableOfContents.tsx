"use client";

import { useTranslations } from "next-intl";
import { MotionNav, MotionLink } from "@/components/common/Motion";
import { useHeadings } from "@/hooks/useHeadings";
import {
  linkVariants,
  tableOfContentsVariants,
} from "@/animations/motionVariants";

export function TableOfContents() {
  const t = useTranslations("TableOfContents");
  const headings = useHeadings();

  return (
    <MotionNav
      variants={tableOfContentsVariants}
      initial="hidden"
      animate="visible"
      className="flex h-fit w-full flex-col gap-5 text-nowrap rounded-xl border border-red-600 p-10 lg:w-fit"
    >
      <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white">
        {t("contents")}
      </h2>

      {headings.map((heading) => (
        <MotionLink
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
          key={heading.text}
          className={`${heading.headingLevel === "H2" ? "font-bold text-neutral-900 dark:text-white" : "ml-3 text-inherit hover:opacity-100"} hover:text-red-600`}
          href={`#${heading.id}`}
        >
          {heading.text}
        </MotionLink>
      ))}
    </MotionNav>
  );
}
