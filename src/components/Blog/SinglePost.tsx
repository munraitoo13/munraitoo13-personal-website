"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconCaretRight } from "@tabler/icons-react";

// framer motion variants
const cardVariants = {
  rest: { x: -50, opacity: 0 },
  hover: { x: 10 },
  view: { x: 0, opacity: 1 },
};
const caretVariants = {
  rest: { x: 0 },
  hover: { x: 10 },
};

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
      className="flex flex-col gap-1 rounded-xl"
      variants={cardVariants}
      initial={"rest"}
      whileInView={"view"}
      whileHover={"hover"}
    >
      <Link className="mb-10 no-underline" href={`/personal/blog/posts/${id}`}>
        <small className="flex gap-3">
          {/* date */}
          <div className="flex items-center justify-center gap-1">{date}</div>

          <span>|</span>

          {/* lang */}
          <div className="flex items-center justify-center gap-1">{lang}</div>
        </small>

        {/* title */}
        <h2>{title}</h2>

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
        <div className="mt-5 flex items-center font-bold text-red-600">
          See more...
          <motion.div variants={caretVariants}>
            <IconCaretRight size={20} />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
