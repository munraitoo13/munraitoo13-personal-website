"use client";

import { motion } from "framer-motion";

export function Projects({ repos }: ProjectsProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-12"
    >
      {repos.map(({ html_url, id, name, description, language }) => (
        <motion.a
          variants={item}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          href={html_url}
          key={id}
          target="_blank"
          className="flex"
        >
          {/* divider */}
          <div className="divider--card"></div>

          {/* project */}
          <div className="flex w-full flex-col">
            {/* project title */}
            <h2 className="text-2xl text-primary">{name}</h2>

            {/* project description */}
            <p>{description || "No description"}</p>

            {/* lang */}
            <p className="mt-5">{language || "No language"}</p>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
