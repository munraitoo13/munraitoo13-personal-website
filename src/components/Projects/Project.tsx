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
      className="flex h-64 w-full flex-col justify-between rounded-xl bg-neutral-900 p-5"
    >
      <div>
        {/* project repo name */}
        <motion.div whileHover={{ x: 5 }}>
          <Link
            href={href}
            target="_blank"
            className="font-bold text-red-600 no-underline"
          >
            {repo}
          </Link>
        </motion.div>

        {/* project title */}
        <h3 className="text-3xl font-bold">{projectTitle}</h3>

        {/* project description */}
        <p className="text-lg">{projectDescription}</p>
      </div>

      {/* main language */}
      <div>
        <small>{language}</small>
      </div>
    </motion.div>
  );
}
