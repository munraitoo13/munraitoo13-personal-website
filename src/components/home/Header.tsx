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
    <section className="tui-hero-surface relative overflow-hidden border-b border-white/15 pt-16">
      <svg
        aria-hidden="true"
        viewBox="0 0 640 520"
        fill="none"
        className="pointer-events-none absolute top-0 right-0 h-full w-auto opacity-65 select-none"
      >
        <path
          d="M640 60H320C231.634 60 160 131.634 160 220V520"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.25"
        />
        <path
          d="M640 140H360C293.726 140 240 193.726 240 260V520"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1.25"
        />
        <path
          d="M640 220H410C360.294 220 320 260.294 320 310V520"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.25"
        />
        <circle
          cx="160"
          cy="220"
          r="4"
          fill="rgba(255,255,255,0.28)"
        />
        <circle
          cx="240"
          cy="260"
          r="3.5"
          fill="rgba(255,255,255,0.22)"
        />
      </svg>

      <div className="tui-rail relative z-10 border-white/15 px-6 py-20 md:py-28">
        <div className="max-w-3xl space-y-7">
          <SectionLabel
            tone="hero"
            Icon={Terminal}
            index="00"
            label={t("greetings")}
          />

          <h1 className="text-4xl leading-[1.06] font-medium tracking-tight text-[#f4f3ef] sm:text-5xl md:text-6xl">
            {t("presentation")}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            <span>{t("aka")} </span>
            <span className="font-mono text-white">{t("nickname")}</span>
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
              className="px-2 py-2 font-mono text-xs uppercase tracking-[0.16em] text-white/80 underline decoration-white/35 underline-offset-8 transition-colors hover:text-white hover:decoration-white"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-black/30">
        <div className="tui-rail flex flex-wrap items-center justify-between gap-4 border-white/15 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/75">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>BELO HORIZONTE, BR</span>
            <span className="text-white/30" aria-hidden="true">
              /
            </span>
            <span>PYTHON · TYPESCRIPT · GO</span>
            <span className="text-white/30" aria-hidden="true">
              /
            </span>
            <span>3+ YRS PRODUCTION</span>
          </div>

          <div className="inline-flex items-center gap-2 text-white">
            <span
              className="size-2 bg-emerald-400"
              aria-hidden="true"
            />
            <span>AVAILABLE FOR REMOTE ROLES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
