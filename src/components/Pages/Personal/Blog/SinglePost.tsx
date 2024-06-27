"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SinglePost({
  title,
  date,
  description,
  language,
  tags,
}: {
  title: string;
  date: string;
  description: string;
  language: string;
  tags: string[];
}) {
  return (
    <div className="rounded-xl bg-neutral-900 p-5">
      <small>
        {date} | {language}
      </small>
      <motion.div initial={{ x: 0 }} whileHover={{ x: 10 }}>
        <Link
          className="text-xl font-bold no-underline hover:text-red-600"
          href={`/personal/blog/${title}`}
        >
          {title}
        </Link>
      </motion.div>
      <p>{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          return (
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm">
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
