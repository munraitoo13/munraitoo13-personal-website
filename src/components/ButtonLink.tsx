"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <motion.a
      className={`${className} flex cursor-pointer items-center gap-1 rounded-full bg-red-600 px-5 py-3 hover:opacity-75`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      href={href}
    >
      {children}
    </motion.a>
  );
}
