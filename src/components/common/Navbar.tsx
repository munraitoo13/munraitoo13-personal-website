"use client";

import { MotionDiv } from "@/components/common/Motion";
import { Logo } from "@/components/common/Logo";
import { Socials } from "@/components/common/Socials";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const t = useTranslations("NavBar");
  const [isOpen, setIsOpen] = useState(false);

  // professional links
  const professional = [
    { name: t("skillsAndTools"), href: "/professional/skills-and-tools" },
    { name: t("experiences"), href: "/professional/experiences" },
  ];

  // personal links
  const personal = [
    { name: t("projects"), href: "/personal/projects" },
    { name: t("contact"), href: "/personal/contact" },
    { name: t("blog"), href: "/personal/blog" },
  ];

  return (
    <nav className="fixed z-50 mt-5 flex w-full flex-col items-center px-10">
      {/* logo and menu */}
      <div className="mx-10 flex w-96 items-center justify-between gap-10 rounded-xl bg-neutral-50/50 p-5 backdrop-blur-xl dark:bg-neutral-950/50">
        {/* logo */}
        <Logo />

        {/* menu */}
        {isOpen ? (
          <IconX
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <IconMenu2
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      {/* dropdown */}
      {isOpen && (
        <MotionDiv
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-10 mt-5 flex w-96 flex-col items-center gap-3 rounded-xl bg-neutral-50/50 p-5 backdrop-blur-xl dark:bg-neutral-950/50"
        >
          {/* professional links */}
          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="cursor-context-menu rounded-full bg-neutral-50/50 px-5 py-2 dark:bg-neutral-900/25">
              Professional
            </h3>

            {professional.map((link) => (
              <Link
                className="text-neutral-900 hover:text-red-600 dark:text-white"
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* personal links */}
          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="cursor-context-menu rounded-full bg-neutral-50/50 px-5 py-2 dark:bg-neutral-900/25">
              Personal
            </h3>

            {personal.map((link) => (
              <Link
                className="text-neutral-900 hover:text-red-600 dark:text-white"
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* socials */}
          <Socials />
        </MotionDiv>
      )}
    </nav>
  );
}
