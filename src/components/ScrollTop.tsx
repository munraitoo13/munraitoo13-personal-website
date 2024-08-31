"use client";

import { useState, useEffect } from "react";
import { IconArrowMoveUp } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function ScrollTop() {
  // button visibility
  const [isVisible, setIsVisible] = useState(false);

  // function to check if the user has scrolled down the page
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  // scroll to top if page realod
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-5 z-50 flex w-full justify-center"
    >
      <IconArrowMoveUp
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="box-content cursor-pointer rounded-full bg-red-600 p-2"
      />
    </motion.div>
  );
}
