"use client";

import { useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import Links from "@/components/Navbar/Links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 mt-5 flex w-full flex-col">
      {/* navbar */}
      <div className="mx-5 flex justify-between rounded-xl p-5 backdrop-blur-md">
        <Logo />

        {isOpen ? (
          <IconX onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <IconMenu onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>

      {/* dropdown mobile */}
      {isOpen && (
        <div className="mt-5 flex w-full flex-col">
          <div className="mx-10 flex flex-col items-center space-y-5 rounded-xl p-5 backdrop-blur-md">
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
