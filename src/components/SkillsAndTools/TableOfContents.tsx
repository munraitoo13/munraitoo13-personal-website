"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string | null; headingLevel: string }[]
  >([]);

  useEffect(() => {
    const foundHeadings = document.querySelectorAll(
      ".mdx-content h2, .mdx-content h3",
    );
    const headingDetails = Array.from(foundHeadings).map((heading) => {
      return {
        id: heading.id,
        text: heading.textContent,
        headingLevel: heading.tagName,
      };
    });

    setHeadings(headingDetails);
  }, []);

  return (
    <motion.nav className="flex h-fit flex-col gap-5 rounded-xl bg-neutral-900 p-5">
      <h2 className="text-xl font-bold">Contents</h2>

      <hr className="border-neutral-600" />

      <div className="flex flex-col gap-3">
        {headings.map((heading) => {
          return (
            <Link
              className={`${heading.headingLevel === "H2" ? "font-medium" : "ml-3 opacity-75 hover:opacity-100"} hover:opacity-75`}
              href={`#${heading.id}`}
            >
              {heading.text}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
