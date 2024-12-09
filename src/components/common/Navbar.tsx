"use client";

import { Language } from "@/components/common/Language";
import { Logo } from "@/components/common/Logo";
import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("NavBar");

  const personalLinks = getPersonalLinks(t);
  const professionalLinks = getProfessionalLinks(t);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.25 } },
  };

  return (
    <nav className="fixed inset-x-0 top-5 z-50 mx-auto w-fit">
      {/* logo and menu */}
      <div className="flex w-96 items-center justify-between rounded-xl bg-background/75 p-5 backdrop-blur-xl">
        {/* logo */}
        <Logo />

        {/* menu */}
        {isOpen ? (
          <IconX
            className="cursor-pointer text-primary"
            onClick={() => setIsOpen(!isOpen)}
            stroke={1.25}
          />
        ) : (
          <IconMenu2
            className="cursor-pointer text-primary"
            onClick={() => setIsOpen(!isOpen)}
            stroke={1.25}
          />
        )}
      </div>

      {/* dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-5 flex w-96 flex-col items-center justify-center rounded-xl bg-background/75 p-5 backdrop-blur-xl"
          >
            {/* personal links */}
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-lg text-primary">{t("personal")}</p>

              {personalLinks.map(({ name, href }) => (
                <Link key={name} href={href}>
                  {name}
                </Link>
              ))}
            </div>

            {/* professional links */}
            <div className="mt-5 flex flex-col items-center justify-center gap-3">
              <p className="text-lg text-primary">{t("professional")}</p>

              {professionalLinks.map(({ name, href }) => (
                <Link className="" key={name} href={href}>
                  {name}
                </Link>
              ))}
            </div>

            {/* language seletor */}
            <Language />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
