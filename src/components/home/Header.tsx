import { Button } from "@/components/common/Button";
import { SectionLabel } from "@/components/common/SectionLabel";
import { RESUME_URL } from "@/constants/constants";
import { ArrowRight, ArrowUpRight, Terminal } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Header() {
  const t = await getTranslations("HomePage");
  const tNav = await getTranslations("NavBar");

  return (
    <section className="tui-hero-surface border-b border-white/20 pt-16">
      <div className="tui-rail border-white/20 px-6 py-20 md:py-28">
        <div className="max-w-4xl space-y-7">
          <SectionLabel
            tone="hero"
            Icon={Terminal}
            index="00"
            label={t("greetings")}
          />

          <h1 className="font-sans text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("presentation")}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            <span>{t("aka")} </span>
            <span className="font-mono text-sm text-white">{t("nickname")}</span>
            <span>, {t("profession")}</span>
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link href="/projects">
              <Button variant="dark" size="lg">
                <span>{tNav("projects")}</span>
                <ArrowRight className="size-3.5" strokeWidth={1.75} />
              </Button>
            </Link>

            <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="lg">
                <span>{t("resume")}</span>
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Button>
            </Link>

            <Link
              href="/contact"
              className="px-2 py-2 font-mono text-xs uppercase tracking-[0.16em] text-white/85 underline decoration-white/40 underline-offset-8 transition-colors hover:text-white hover:decoration-white"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/20 py-3">
        <div className="animate-tui-marquee hover:[animation-play-state:paused]">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex > 0 ? "true" : undefined}
              className="flex shrink-0 items-center gap-6 pr-6 font-mono text-[11px] uppercase tracking-[0.16em] whitespace-nowrap text-white/85"
            >
              <span>BELO HORIZONTE, BR</span>
              <span className="text-white/40" aria-hidden="true">
                /
              </span>
              <span>PYTHON · TYPESCRIPT · GO</span>
              <span className="text-white/40" aria-hidden="true">
                /
              </span>
              <span>3+ YRS PRODUCTION</span>
              <span className="text-white/40" aria-hidden="true">
                /
              </span>
              <span>FASTAPI · NEXT.JS · POSTGRESQL</span>
              <span className="text-white/40" aria-hidden="true">
                /
              </span>
              <span className="inline-flex items-center gap-2 text-white">
                <span className="size-2 bg-emerald-300" aria-hidden="true" />
                <span>AVAILABLE FOR REMOTE ROLES</span>
              </span>
              <span className="text-white/40" aria-hidden="true">
                /
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
