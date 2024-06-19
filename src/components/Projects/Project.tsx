"use client";

import { motion } from "framer-motion";

export default function Project({
  repo,
  projectTitle,
  projectDescription,
  href,
}: {
  repo: string;
  projectTitle: string;
  projectDescription: string;
  href: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex w-full flex-col items-center p-5"
    >
      {/* project */}
      <div className="flex w-full flex-col gap-5">
        <div className="flex flex-col">
          {/* project repo name */}
          <a
            href={href}
            target="_blank"
            className="font-bold text-red-600"
          >
            {repo}
          </a>

          {/* project title */}
          <h2 className="text-3xl font-bold">{projectTitle}</h2>

          {/* project description */}
          <p className="opacity-75">{projectDescription}</p>
        </div>

        <div className="h-96 w-full rounded-xl bg-neutral-900">
          <img
            src=""
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}
