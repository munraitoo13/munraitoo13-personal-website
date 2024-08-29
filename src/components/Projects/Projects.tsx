"use client";

import { motion } from "framer-motion";
import { IconBrandGithubFilled } from "@tabler/icons-react";
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
      className="flex flex-col justify-between gap-10 rounded-xl bg-neutral-900/25 p-10"
      href={href}
      target="_blank"
      whileHover={{ x: 5 }}
    >
      {/* project */}
      <div className="flex flex-col gap-3">
        {/* project repo name */}
        <p className="text-xs text-red-600">{repo}</p>

        {/* project title */}
        <p className="text-4xl font-bold text-white">{projectTitle}</p>

        {/* project description */}
        <p className="text-lg">{projectDescription}</p>
      </div>

      {/* github availability */}
      <div className="flex w-fit items-center gap-3 rounded-full bg-neutral-900/25 px-5 py-3 font-bold">
        <IconBrandGithubFilled />
        Available on GitHub!
      </div>
    </motion.a>
  );
}
