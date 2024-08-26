"use client";

import { IconFile } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactAndResume() {
  return (
    <motion.div
      className="mt-10 flex gap-5 text-sm"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <Link
        className="flex items-center rounded-full bg-red-600 px-5 py-3 text-white"
        href="/personal/contact"
      >
        Contact me
      </Link>

      <Link className="flex items-center gap-1" href="#">
        <IconFile stroke={1.25} />
        RESUME
      </Link>
    </motion.div>
  );
}
