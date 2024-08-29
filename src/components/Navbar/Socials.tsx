"use client";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex gap-1">
      {/* github */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="https://github.com/munraitoo13"
          target="_blank"
          className="text-white hover:text-red-600"
        >
          <IconBrandGithub stroke={1.25} />
        </Link>
      </motion.div>

      {/* linkedin */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="https://www.linkedin.com/in/munraitoo13/"
          target="_blank"
          className="text-white hover:text-red-600"
        >
          <IconBrandLinkedin stroke={1.25} />
        </Link>
      </motion.div>

      {/* instagram */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="https://www.instagram.com/munraitoo13/"
          target="_blank"
          className="text-white hover:text-red-600"
        >
          <IconBrandInstagram stroke={1.25} />
        </Link>
      </motion.div>

      {/* twitter */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="https://twitter.com/munraitoo13"
          target="_blank"
          className="text-white hover:text-red-600"
        >
          <IconBrandX stroke={1.25} />
        </Link>
      </motion.div>
    </div>
  );
}
