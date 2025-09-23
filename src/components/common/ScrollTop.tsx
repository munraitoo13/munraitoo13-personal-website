"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { IconChevronUp } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function ScrollTop() {
  const { isVisible, scrollTop } = useScrollTop();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      className="fixed inset-x-0 bottom-5 z-50 mx-auto flex w-fit"
    >
      <IconChevronUp
        onClick={scrollTop}
        size={32}
        className="bg-accent text-accent-contrast cursor-pointer rounded-full p-2"
      />
    </motion.div>
  );
}
