import { buttonClasses } from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Header() {
  const t = await getTranslations("HomePage");
  const tNav = await getTranslations("NavBar");
  const locale = await getLocale();
  const isPt = locale === "pt-BR";

  const specs = isPt
    ? [
        "Belo Horizonte, BR",
        "Python · TypeScript · Go",
        "+3 anos em produção",
        "Aberto a vagas remotas",
      ]
    : [
        "Belo Horizonte, BR",
        "Python · TypeScript · Go",
        "3+ years production",
        "Open to remote roles",
      ];

  return (
    <section className="tui-hero-surface border-b border-white/25 pt-16">
      <div className="tui-rail border-white/25 px-6 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-sans text-4xl leading-[1.06] font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            {t("presentation")}
          </h1>

          <p className="text-base font-medium text-white/95 sm:text-lg">
            {t("greetings")}
          </p>

          <p className="max-w-[62ch] text-base leading-relaxed text-white/95 sm:text-lg">
            <span>{t("aka")} </span>
            <span className="font-mono text-sm text-white">{t("nickname")}</span>
            <span>, {t("profession")}</span>
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className={buttonClasses({ variant: "dark", size: "lg", className: "group" })}
            >
              <span>{tNav("projects")}</span>
              <ArrowRight className="motion-arrow-right size-4" strokeWidth={1.75} />
            </Link>

            <Link
              href="/contact"
              className={buttonClasses({ variant: "heroOutline", size: "lg" })}
            >
              <span>{t("contact")}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/25">
        <div className="tui-rail grid grid-cols-1 divide-y divide-white/20 border-white/25 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {specs.map((item) => (
            <div
              key={item}
              className="px-6 py-3.5 font-mono text-xs text-white/95 sm:border-b lg:border-b-0"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
