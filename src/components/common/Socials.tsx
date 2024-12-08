"use client";

import { motion } from "framer-motion";
import { SOCIALS } from "@/constants/constants";

export function Socials() {
  return (
    <>
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
    </>
  );
}
