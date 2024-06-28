"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface SinglePostProps {
  title: string;
  date: string;
  desc: string;
  lang: string;
  tags: string[];
  id: number;
}

export default function SinglePost({
  title,
  date,
  desc,
  lang,
  tags,
  id,
}: SinglePostProps) {
  return (
    <div className="rounded-xl bg-neutral-900 p-5">
      <small>
        {date} | {lang}
      </small>
      <motion.div initial={{ x: 0 }} whileHover={{ x: 10 }}>
        <Link
          className="text-xl font-bold no-underline hover:text-red-600"
          href={`/personal/blog/posts/${id}`}
        >
          {title}
        </Link>
      </motion.div>
      <p>{desc}</p>
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
