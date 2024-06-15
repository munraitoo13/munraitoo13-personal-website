"use client";

import { useState, useEffect } from "react";
import { IconArrowMoveUp } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  return (
    <div>
      <IconArrowMoveUp
        onClick={scrollToTop}
        className="bg-red-600 fixed p-3 m-10 mb-20 rounded-full bottom-0 right-0 z-50 box-content cursor-pointer"
      />
    </div>
  );
}
