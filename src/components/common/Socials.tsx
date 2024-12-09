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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-primary"
        >
          <Icon stroke={1} />
        </motion.a>
      ))}
    </div>
  );
}
