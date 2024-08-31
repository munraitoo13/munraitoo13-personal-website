"use client";

import { motion } from "framer-motion";
import { IconGhost2Filled } from "@tabler/icons-react";

// SinglePost component props
interface PostsProps {
  title: string;
  date: string;
  desc: string;
  lang: string;
  tags: any;
  id: number;
}

// SinglePost component
export default function Posts({
  title,
  date,
  desc,
  lang,
  tags,
  id,
}: PostsProps) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ x: 5 }}
      className="flex flex-col gap-10 rounded-xl bg-neutral-900/25 p-10"
      href={`/personal/blog/posts/${id}`}
    >
      {/* post itself */}
      <div className="flex flex-col gap-3">
        {/* date and lang */}
        <div className="flex items-center gap-5 text-red-600">
          {/* date */}
          <small>{date}</small>
        </div>

        {/* title */}
        <h2 className="text-4xl font-bold text-white">{title}</h2>

        {/* description */}
        <p className="text-xl">{desc}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-1">
          {tags.map((tag: any) => (
            <span
              key={tag.name}
              className="rounded-full bg-neutral-900/25 px-3 py-1"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* check it and lang */}
      <div className="flex items-center gap-5">
        {/* check it */}
        <div className="flex w-fit items-center gap-3 rounded-full bg-neutral-900/25 px-5 py-3 font-bold">
          <IconGhost2Filled />
          Check it!
        </div>

        {/* lang */}
        <small>{lang}</small>
      </div>
    </motion.a>
  );
}
