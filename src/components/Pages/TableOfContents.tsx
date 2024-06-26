"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string; headingLevel: string }[]
  >([]);

  useEffect(() => {
    const foundHeadings = document.querySelectorAll(
      ".mdx-content h2, .mdx-content h3",
    );

    const headingDetails = Array.from(foundHeadings).map((heading) => {
      return {
        id: heading.id,
        text: heading.textContent || "", // Ensure text is not null
        headingLevel: heading.tagName,
      };
    });

    setHeadings(headingDetails);
  }, []);

  return (
    <motion.nav
      className="flex h-fit flex-col gap-5 rounded-xl bg-neutral-900 p-5 lg:w-1/4"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 0.25, transition: { delay: 0.3 } }}
      whileHover={{ opacity: 1 }}
    >
      <h2 className="text-xl font-bold">Contents</h2>

      <hr className="border-neutral-600" />

      <div className="flex flex-col gap-3">
        {headings.map((heading) => {
          return (
            <motion.div whileHover={{ x: 5 }}>
              <Link
                className={`${heading.headingLevel === "H2" ? "font-medium" : "ml-3 opacity-75 hover:opacity-100"} hover:text-red-600`}
                href={`#${heading.id}`}
              >
                {heading.text}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
}
