"use client";

import { STACKS } from "@/constants/constants";
import { motion } from "framer-motion";

export function Stacks() {
  const variants = {
    default: { opacity: 1 },
    scale: { scale: 1.1 },
  };

  return (
    <>
      {STACKS.map(({ name, Icon }) => {
        return (
          <motion.div
            variants={variants}
            key={name}
            title={name}
            animate="default"
            whileHover="scale"
            className="hover:text-accent text-primary flex flex-col"
          >
            <Icon stroke={1.25} />
          </motion.div>
        );
      })}
    </>
  );
}
