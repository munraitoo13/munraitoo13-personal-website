"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Project({
  repo,
  projectTitle,
  projectDescription,
  href,
  language,
}: {
  repo: string;
  projectTitle: string;
  projectDescription: string;
  href: string;
  language: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex w-full flex-col rounded-xl"
    >
      <div>
        {/* project repo name */}
        <p className="font-bold text-red-600 no-underline">{repo}</p>

        {/* project title */}
        <motion.div whileHover={{ x: 5 }}>
          <Link href={href} target="_blank" className="text-2xl font-bold">
            {projectTitle}
          </Link>
        </motion.div>

        {/* project description */}
        <p>{projectDescription}</p>
      </div>

      {/* main language */}
      <small className="mt-5">{language}</small>
    </motion.div>
  );
}
