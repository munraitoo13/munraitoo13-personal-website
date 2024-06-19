"use client";

import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import Links from "@/components/Navbar/Links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 mt-5 flex w-full flex-col items-center px-5">
      {/* navbar */}
      <div className="mx-10 flex h-20 w-full max-w-screen-xl items-center justify-between gap-10 rounded-xl p-5 backdrop-blur-md">
        {/* logo and links */}
        <div className="flex items-center gap-10">
          {/* logo */}
          <div>
            <Logo />
          </div>

          {/* links lg */}
          <div className="hidden lg:flex">
            <Links />
          </div>
        </div>

        {/* socials and menu */}
        <div className="gap-10">
          {/* socials md */}
          <div className="hidden lg:inline">
            <Socials />
          </div>

          {/* menu sm md */}
          <div className="lg:hidden">
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
          <div className="flex flex-col items-center space-y-5 rounded-xl p-5 backdrop-blur-md">
            {/* links */}
            <Links />

            {/* socials */}
            <Socials />
          </div>
        </div>
      )}
    </nav>
  );
}
