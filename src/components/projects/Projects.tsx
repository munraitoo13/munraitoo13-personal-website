"use client";

import { motion } from "framer-motion";

export function Projects({ repos }: ProjectsProps) {
  const variants = {
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "anticipate" },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="layout flex flex-col gap-12"
    >
      {repos.map(({ html_url, id, name, description, language }) => (
        <motion.a
          variants={item}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          href={html_url}
          key={id}
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          {/* project */}
          <div className="flex w-full flex-col">
            {/* project title */}
            <h2 className="text-2xl font-medium text-primary">{name}</h2>

            {/* project description */}
            <p>{description || "No description"}</p>

            {/* lang */}
            <p className="mt-5 text-tertiary">{language || "No language"}</p>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
