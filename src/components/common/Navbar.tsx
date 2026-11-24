"use client";

import { Button } from "@/components/common/Button";
import { LanguageSelector } from "@/components/common/LanguageSelector";
import {
  RESUME_URL,
  getPersonalLinks,
  getProfessionalLinks,
} from "@/constants/constants";
import useClickOutside from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useClickOutside(navRef, () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const t = useTranslations("NavBar");
  const th = useTranslations("HomePage");

  const navLinks = [
    ...getPersonalLinks(t).filter((item) => item.href === "/projects"),
    ...getProfessionalLinks(t),
    ...getPersonalLinks(t).filter((item) => item.href !== "/projects"),
  ];

  return (
    <header
      ref={navRef}
      className={cn(
        "relative z-30 border-b",
        isHome
          ? "-mb-16 border-white/15 bg-transparent"
          : "bg-background border-[var(--color-border)]",
      )}
    >
      <div
        className={cn(
          "tui-rail flex h-16 items-center justify-between px-6",
          isHome && "border-white/15",
        )}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-mono text-sm font-medium tracking-[0.08em] text-[#ecebe6]"
        >
          <span
            className={cn("size-2", isHome ? "bg-white" : "bg-accent")}
            aria-hidden="true"
          />
          <span>munraitoo13</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map(({ href, name }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200",
                  isHome
                    ? isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : isActive
                      ? "text-primary underline decoration-accent underline-offset-8"
                      : "text-secondary hover:text-primary",
                )}
              >
                {name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSelector tone={isHome ? "hero" : "default"} />

          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant={isHome ? "dark" : "primary"}>
              <span>{th("resume")}</span>
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "inline-flex size-9 cursor-pointer items-center justify-center border md:hidden",
            isHome
              ? "border-white/25 bg-black/20 text-white"
              : "border-[var(--color-border)] bg-background-contrast text-primary",
          )}
        >
          {isOpen ? (
            <X className="size-4" strokeWidth={1.75} />
          ) : (
            <Menu className="size-4" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="bg-background border-t border-[var(--color-border)] px-6 py-6 md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col divide-y divide-[var(--color-border)] border border-[var(--color-border)]"
          >
            {navLinks.map(({ href, name }, idx) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] transition-colors",
                    isActive
                      ? "bg-background-contrast text-primary"
                      : "text-secondary hover:bg-background-contrast hover:text-primary",
                  )}
                >
                  <span>{name}</span>
                  <span className="text-tertiary">0{idx + 1}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 flex items-center justify-between gap-4">
            <LanguageSelector />

            <Link
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm">
                <span>{th("resume")}</span>
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
