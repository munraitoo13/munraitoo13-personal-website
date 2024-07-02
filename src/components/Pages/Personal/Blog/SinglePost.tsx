"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconLanguage, IconCalendarEvent } from "@tabler/icons-react";

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
    <Link className="mb-10 no-underline" href={`/personal/blog/posts/${id}`}>
      <motion.div className="flex flex-col gap-1 rounded-xl p-5">
        <small className="flex gap-3 opacity-75">
          {/* date */}
          <div className="flex items-center justify-center gap-1">
            <IconCalendarEvent size={20} />
            {date}
          </div>
          |{/* language */}
          <div className="flex items-center justify-center gap-1">
            <IconLanguage size={20} />
            {lang}
          </div>
        </small>

        <h2 className="m-0">{title}</h2>

        <p className="opacity-75">{desc}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm opacity-75">
                {tag}
              </span>
            );
          })}
        </div>
      </motion.div>
    </Link>
  );
}
