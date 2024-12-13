"use client";

import { SOCIALS } from "@/constants/constants";
import { motion } from "framer-motion";

export function Socials() {
  return (
    <div className="flex gap-1">
      {SOCIALS.map(({ href, Icon }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-accent"
        >
          <Icon stroke={1.25} />
        </motion.a>
      ))}
    </div>
  );
}
