"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectProps {
  repo: string;
  projectTitle: string;
  projectDescription: string;
  href: string;
  language: string;
}

export default function Project({
  repo,
  projectTitle,
  projectDescription,
  href,
  language,
}: ProjectProps) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex flex-col rounded-xl bg-neutral-900/10 p-5"
      href={href}
      target="_blank"
      whileHover={{ x: 5 }}
    >
      <div>
        {/* project repo name */}
        <p className="font-bold text-red-600 no-underline">{repo}</p>

        {/* project title */}
        <p className="text-2xl font-bold text-white">{projectTitle}</p>

        {/* project description */}
        <p>{projectDescription}</p>
      </div>

      {/* main language */}
      <small className="mt-5">{language}</small>
    </motion.a>
  );
}
