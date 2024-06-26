"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      className="flex h-96 w-full flex-col gap-5 rounded-xl bg-neutral-900 p-5"
    >
      <div>
        {/* project repo name */}
        <motion.div whileHover={{ x: 5 }}>
          <Link href={href} target="_blank" className="font-bold text-red-600">
            {repo}
          </Link>
        </motion.div>

        {/* project title */}
        <h2 className="text-3xl font-bold">{projectTitle}</h2>
      </div>

      {/* project description */}
      <p className="text-lg opacity-75">{projectDescription}</p>
    </motion.div>
  );
}
