"use client";

import { MotionDiv } from "@/components/common/Motion";
import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { Logo } from "@/components/common/Logo";
import { Socials } from "@/components/common/Socials";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Language } from "@/components/common/Language";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("NavBar");

  const personalLinks = getPersonalLinks(t);
  const professionalLinks = getProfessionalLinks(t);

  return (
    <nav className="fixed z-50 mt-5 flex w-full select-none flex-col items-center px-10">
      {/* logo and menu */}
      <div className="mx-10 flex w-96 items-center justify-between gap-10 rounded-xl bg-neutral-200/50 p-5 backdrop-blur-xl dark:bg-neutral-950/50">
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
          className="mx-10 mt-5 flex w-96 flex-col items-center gap-3 rounded-xl bg-neutral-200/50 p-5 backdrop-blur-xl dark:bg-neutral-950/50"
        >
          {/* personal links */}
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="category-badge">{t("personal")}</p>

            {personalLinks.map(({ name, href }) => (
              <Link
                className="text-neutral-900 hover:text-red-500 dark:text-white"
                key={name}
                href={href}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* professional links */}
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="category-badge">{t("professional")}</p>

            {professionalLinks.map(({ name, href }) => (
              <Link
                className="text-neutral-900 hover:text-red-500 dark:text-white"
                key={name}
                href={href}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* socials */}
          <Socials />

          {/* language */}
          <Language />
        </MotionDiv>
      )}
    </nav>
  );
}
