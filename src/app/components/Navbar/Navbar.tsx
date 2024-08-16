"use client";

import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Logo from "@/app/components/Navbar/Logo";
import Socials from "@/app/components/Navbar/Socials";
import NavItems from "@/app/components/Navbar/NavItems";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 mt-5 flex w-full flex-col items-center px-5">
      {/* navbar */}
      <div className="mx-10 flex h-20 w-full max-w-screen-xl items-center justify-between gap-10 rounded-xl bg-neutral-900 bg-opacity-25 p-5 backdrop-blur-md">
        {/* logo and links */}
        <div className="flex items-center gap-10">
          {/* logo */}
          <div>
            <Logo />
          </div>

          {/* links lg */}
          <div className="hidden lg:flex">
            <NavItems />
          </div>
        </div>

        {/* socials md */}
        <div className="hidden lg:flex">
          <Socials />
        </div>

        {/* menu sm md */}
        <div className="cursor-pointer lg:hidden">
          {isOpen ? (
            <IconX onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <IconMenu2 onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>

      {/* dropdown mobile */}
      {isOpen && (
        <div className="mt-5 flex w-full flex-col lg:hidden">
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center space-y-5 rounded-xl p-5 backdrop-blur-md"
          >
            {/* links */}
            <NavItems />

            {/* socials */}
            <Socials />
          </motion.div>
        </div>
      )}
    </nav>
  );
}
