"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { MotionDiv, MotionNav } from "@/components/common/Motion";

export function TableOfContents() {
  const t = useTranslations("TableOfContents");
  const [headings, setHeadings] = useState<Headings[]>([]);

  useEffect(() => {
    // find all headings in the content
    const foundHeadings = document.querySelectorAll(
      ".mdx-content h2, .mdx-content h3",
    );

    // creates an array of objects with the heading details and map it to the state
    const headingDetails = Array.from(foundHeadings).map((heading) => {
      return {
        id: heading.id,
        text: heading.textContent!,
        headingLevel: heading.tagName,
      };
    });

    setHeadings(headingDetails);
  }, []);

  return (
    <MotionNav
      className="flex h-fit w-full flex-col gap-5 text-nowrap rounded-xl border border-red-600 p-10 lg:w-fit"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white">
        {t("contents")}
      </h2>

      <div className="flex flex-col gap-3">
        {headings.map((heading) => (
          <MotionDiv key={heading.text} whileHover={{ x: 5 }}>
            <Link
              className={`${heading.headingLevel === "H2" ? "font-bold text-neutral-900 dark:text-white" : "ml-3 text-inherit hover:opacity-100"} hover:text-red-600`}
              href={`#${heading.id}`}
            >
              {heading.text}
            </Link>
          </MotionDiv>
        ))}
      </div>
    </MotionNav>
  );
}
