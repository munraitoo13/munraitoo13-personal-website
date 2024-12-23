"use client";

import { Language } from "@/components/common/Language";
import { Logo } from "@/components/common/Logo";
import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

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
            className="text-primary cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            size={20}
          />
        ) : (
          <IconMenu2
            className="text-primary cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            size={20}
          />
        )}
      </div>

      {/* dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-5 flex w-96 flex-col items-center justify-center rounded-xl bg-background/75 p-5 backdrop-blur-xl"
          >
            {/* personal links */}
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-primary font-medium">{t("personal")}</p>

              {personalLinks.map(({ name, href }) => (
                <Link
                  className="transition-colors duration-500 hover:text-accent"
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* professional links */}
            <div className="mt-5 flex flex-col items-center justify-center gap-3">
              <p className="text-primary font-medium">{t("professional")}</p>

              {professionalLinks.map(({ name, href }) => (
                <Link
                  className="transition-colors duration-500 hover:text-accent"
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
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
