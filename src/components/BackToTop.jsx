"use client";

import { useState, useEffect } from "react";
import { IconArrowMoveUp } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  // state to manage the visibility of the back to top button
  const [isVisible, setIsVisible] = useState(false);

  // function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // function to check if the user has scrolled down the page
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
  }, []);

  // scroll to top if page realod
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <IconArrowMoveUp
          onClick={scrollToTop}
          className="bg-red-600 fixed box-content bottom-10 right-10 p-2 rounded-full shadow-md cursor-pointer z-50"
        />
      </motion.div>
    </div>
  );
}
