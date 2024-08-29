"use client";

import { motion } from "framer-motion";
import { IconLanguage, IconCalendarEvent } from "@tabler/icons-react";

interface BlogHeaderProps {
  pageTitle: string;
  pageDescription: string;
  lang: string;
  date: string;
}

export default function BlogHeader({
  pageTitle,
  pageDescription,
  lang,
  date,
}: BlogHeaderProps) {
  return (
    <header className="flex w-full flex-col justify-center gap-5 pt-48">
      <div>
        {/* title */}
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-6xl font-bold text-white"
        >
          {pageTitle}
        </motion.h1>
      </div>

      {/* description */}
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
        className="text-lg"
      >
        {pageDescription}
      </motion.p>

      {/* date and language */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
        className="flex items-center gap-5"
      >
        {/* date */}
        <div className="flex items-center gap-3">
          <IconCalendarEvent size={20} />
          <small>{date}</small>
        </div>
        |{/* lang */}
        <div className="flex items-center gap-3">
          <IconLanguage size={20} />
          <small>{lang}</small>
        </div>
      </motion.div>
    </header>
  );
}
