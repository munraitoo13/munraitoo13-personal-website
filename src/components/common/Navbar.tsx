"use client";

import { buttonClasses } from "@/components/common/Button";
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
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useClickOutside(navRef, () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
          ? "-mb-16 border-white/25 bg-transparent"
          : "bg-background border-[var(--color-border)]",
      )}
    >
      <div
        className={cn(
          "tui-rail flex h-16 items-center justify-between px-6",
          isHome && "border-white/25",
        )}
      >
        <Link
          href="/"
          className={cn(
            "inline-flex min-h-11 items-center gap-2.5 font-mono text-sm font-medium tracking-[0.04em]",
            isHome ? "text-white" : "text-primary",
          )}
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
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-150 ease",
                  isHome
                    ? isActive
                      ? "text-white underline decoration-white underline-offset-8"
                      : "text-white/95 hover:text-white hover:underline hover:decoration-white/60 hover:underline-offset-8"
                    : isActive
                      ? "text-primary underline decoration-accent-text underline-offset-8"
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
            className={buttonClasses({
              size: "sm",
              variant: isHome ? "dark" : "primary",
              className: "group",
            })}
          >
            <span>{th("resume")}</span>
            <ArrowUpRight className="motion-arrow-up-right size-3.5" strokeWidth={1.75} />
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "motion-press inline-flex size-11 cursor-pointer items-center justify-center border md:hidden",
            isHome
              ? "border-white/40 bg-transparent text-white hover:bg-white/10"
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
        <div className="motion-drawer bg-background border-t border-[var(--color-border)] px-6 py-6 md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col divide-y divide-[var(--color-border)] border border-[var(--color-border)]"
          >
            {navLinks.map(({ href, name }) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex min-h-11 items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-background-contrast text-primary"
                      : "text-secondary hover:bg-background-contrast hover:text-primary",
                  )}
                >
                  <span>{name}</span>
                  <ArrowUpRight
                    className={cn(
                      "size-3.5",
                      isActive ? "text-accent-text" : "text-tertiary",
                    )}
                    strokeWidth={1.75}
                  />
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
              className={buttonClasses({ size: "sm", variant: "primary" })}
            >
              <span>{th("resume")}</span>
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
