"use client";

import { LanguageSelector } from "@/components/common/LanguageSelector";
import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useClickOutside from "@/hooks/useClickOutside";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setIsOpen(false));

  const t = useTranslations("NavBar");

  const personalLinks = getPersonalLinks(t);
  const professionalLinks = getProfessionalLinks(t);

  useEffect(() => {
    if (isOpen) setShouldRenderMenu(true);
  }, [isOpen]);

  return (
    <nav className="fixed inset-x-0 z-50 mt-2">
      <div className="bg-background/75 mx-auto flex w-96 items-center justify-between rounded-xl p-6 backdrop-blur-md">
        <Link href="/" className="text-primary text-nowrap">
          munraitoo13
        </Link>

        {isOpen ? (
          <IconX
            className="text-primary cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            size={24}
          />
        ) : (
          <IconMenu2
            className="text-primary cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            size={24}
          />
        )}
      </div>

      {shouldRenderMenu && (
        <div
          ref={menuRef}
          onAnimationEnd={() => {
            if (!isOpen) setShouldRenderMenu(false);
          }}
          className={`bg-background/75 mx-auto mt-2 flex w-96 flex-col items-center justify-center gap-8 rounded-xl p-6 backdrop-blur-md ${
            isOpen ? "animate-float-in" : "animate-float-out"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <b>{t("personal")}</b>

            {personalLinks.map(({ href, name }) => (
              <Link
                className="hover:text-accent"
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <b>{t("professional")}</b>

            {professionalLinks.map(({ href, name }) => (
              <Link
                className="hover:text-accent"
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>

          <LanguageSelector />
        </div>
      )}
    </nav>
  );
}
