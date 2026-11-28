import { Socials } from "@/components/common/Socials";
import {
  CONTACT_EMAIL,
  RESUME_URL,
  getPersonalLinks,
  getProfessionalLinks,
} from "@/constants/constants";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Footer() {
  const t = await getTranslations("Footer");
  const th = await getTranslations("HomePage");

  const navLinks = [
    ...getPersonalLinks(t).filter((item) => item.href === "/projects"),
    ...getProfessionalLinks(t),
    ...getPersonalLinks(t).filter((item) => item.href !== "/projects"),
  ];

  return (
    <footer className="bg-background border-t border-[var(--color-border)]">
      <div className="tui-rail">
        <div className="grid md:grid-cols-12">
          <div className="flex flex-col justify-between gap-6 border-b border-[var(--color-border)] p-6 md:col-span-5 md:border-r md:border-b-0 md:p-8">
            <div className="space-y-3">
              <div className="text-primary inline-flex items-center gap-2 font-mono text-sm font-medium tracking-[0.04em]">
                <span className="bg-accent size-2" aria-hidden="true" />
                <span>munraitoo13</span>
              </div>
              <p className="text-secondary max-w-[48ch] text-sm leading-relaxed">
                {t("aboutPhrase")}
              </p>
            </div>

            <Link
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent-text inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-medium transition-colors"
            >
              <span>{th("resume")}</span>
              <ArrowUpRight className="size-4" strokeWidth={1.75} />
            </Link>
          </div>

          <div className="space-y-3 border-b border-[var(--color-border)] p-6 md:col-span-3 md:border-r md:border-b-0 md:p-8">
            <p className="text-tertiary text-xs font-medium">
              {t("professional")} &amp; {t("personal")}
            </p>
            <nav aria-label="Footer navigation" className="flex flex-col">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-secondary hover:text-primary inline-flex min-h-10 w-fit items-center text-sm transition-colors"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 md:col-span-4 md:p-8">
            <div className="space-y-3">
              <p className="text-tertiary text-xs font-medium">
                {t("contact")}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:text-accent-text block font-mono text-sm transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <Socials className="justify-start gap-2" />
          </div>
        </div>

        <div className="text-tertiary flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-border)] px-6 py-4 font-mono text-xs">
          <p>&copy; {new Date().getFullYear()} Augusto Mendes · munraitoo13</p>
          <p>Belo Horizonte, BR</p>
        </div>
      </div>
    </footer>
  );
}
