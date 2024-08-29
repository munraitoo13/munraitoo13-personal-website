"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      className="mb-5 flex h-fit w-full flex-col gap-5 text-nowrap rounded-xl border border-red-600 p-5 lg:w-fit"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      <h2 className="text-xl font-bold text-white">Contents</h2>

      <div className="flex flex-col gap-3">
        {headings.map((heading) => {
          return (
            <motion.div whileHover={{ x: 5 }}>
              <Link
                className={`${heading.headingLevel === "H2" ? "font-medium text-white" : "ml-3 text-inherit hover:opacity-100"} hover:text-red-600`}
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
