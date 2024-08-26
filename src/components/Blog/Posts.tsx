"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconCaretRight } from "@tabler/icons-react";

// SinglePost component props
interface SinglePostProps {
  title: string;
  date: string;
  desc: string;
  lang: string;
  tags: any;
  id: number;
}

// SinglePost component
export default function SinglePost({
  title,
  date,
  desc,
  lang,
  tags,
  id,
}: SinglePostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex flex-col gap-1 rounded-xl"
    >
      <Link className="mb-10 no-underline" href={`/personal/blog/posts/${id}`}>
        <div className="flex gap-5">
          {/* date */}
          <small>{date}</small>

          {/* lang */}
          <small>{lang}</small>
        </div>

        {/* title */}
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        {/* description */}
        <p>{desc}</p>

        {/* tags */}
        <div className="mt-5 flex flex-wrap gap-1">
          {tags.map((tag: { id: Number; name: string }) => {
            return (
              <span
                key={tag.name}
                className="rounded-full bg-neutral-800 px-3 py-1 text-sm"
              >
                {tag.name}
              </span>
            );
          })}
        </div>

        {/* view more */}
        <span className="mt-5 flex items-center font-bold text-red-600">
          See more...
        </span>
      </Link>
    </motion.div>
  );
}
