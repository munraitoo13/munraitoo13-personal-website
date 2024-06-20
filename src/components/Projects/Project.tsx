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
    >
      {/* project */}
      <div className="flex w-full flex-col gap-5">
        {/* infos */}
        <div className="flex flex-col">
          {/* project repo name */}
          <motion.a
            whileHover={{ x: 5 }}
            href={href}
            target="_blank"
            className="font-bold text-red-600"
          >
            {repo}
          </motion.a>

          {/* project title */}
          <h2 className="text-3xl font-bold">{projectTitle}</h2>

          {/* project description */}
          <p className="text-lg opacity-75">{projectDescription}</p>
        </div>

        {/* image */}
        <div className="h-96 w-full rounded-xl border-b-2 border-red-600 bg-neutral-950 drop-shadow-lg">
          <img
            src=""
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}
