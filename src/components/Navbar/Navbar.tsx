"use client";

import Logo from "@/components/Navbar/Logo";
import NavItems from "@/components/Navbar/NavItems";
import Socials from "@/components/Navbar/Socials";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { MotionDiv } from "@/components/Motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 mt-5 flex w-full flex-col items-center px-10">
      {/* navbar */}
      <div className="mx-10 flex h-20 w-full max-w-screen-xl items-center justify-between gap-10 rounded-xl bg-neutral-50/50 p-5 backdrop-blur-xl dark:bg-neutral-950/50">
        {/* logo and links */}
        <div className="flex items-center gap-10">
          {/* logo */}
          <Logo />

          {/* links lg */}
          <div className="hidden text-nowrap lg:flex">
            <NavItems />
          </div>
        </div>

        {/* socials md */}
        <div className="flex justify-center gap-5">
          {/* menu sm md */}
          <div className="cursor-pointer lg:hidden">
            {isOpen ? (
              <IconX onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <IconMenu2 onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>
        </div>
      </div>

      {/* dropdown mobile */}
      {isOpen && (
        <div className="mt-5 flex w-full flex-col lg:hidden">
          <MotionDiv
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-5 rounded-xl bg-neutral-50/50 p-5 backdrop-blur-xl dark:bg-neutral-950/50"
          >
            {/* links */}
            <NavItems />

            {/* socials */}
            <Socials />
          </MotionDiv>
        </div>
      )}
    </nav>
  );
}
