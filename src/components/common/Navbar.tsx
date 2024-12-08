"use client";

import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { Logo } from "@/components/common/Logo";
import { Socials } from "@/components/common/Socials";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Language } from "@/components/common/Language";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("NavBar");

  const personalLinks = getPersonalLinks(t);
  const professionalLinks = getProfessionalLinks(t);

  return (
    <nav className="fixed inset-x-0 top-5 z-50 mx-auto w-fit">
      {/* logo and menu */}
      <div className="bg-background/75 flex w-96 items-center justify-between rounded-xl p-5 backdrop-blur-xl">
        {/* logo */}
        <Logo />

        {/* menu */}
        {isOpen ? (
          <IconX
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            stroke={1.25}
          />
        ) : (
          <IconMenu2
            className="cursor-pointer"
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
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-background/75 mt-5 flex w-96 flex-col items-center justify-center rounded-xl p-5 backdrop-blur-xl"
          >
            {/* personal links */}
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-lg text-primary">{t("personal")}</p>

              {personalLinks.map(({ name, href }) => (
                <Link className="" key={name} href={href}>
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

            {/* socials */}
            <div className="mt-5 flex gap-1">
              <Socials />
            </div>

            {/* language seletor */}
            <div className="mt-5 flex gap-4">
              <Language />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
