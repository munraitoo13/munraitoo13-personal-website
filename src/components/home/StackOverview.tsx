import { SectionLabel } from "@/components/common/SectionLabel";
import type { SkillCategory } from "@/types/types";
import { ArrowRight, Cpu } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function StackOverview({
  categories,
}: {
  categories: SkillCategory[];
}) {
  const t = await getTranslations("HomePage");

  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="tui-rail px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <SectionLabel
              index="03"
              label={t("skillsSectionLabel")}
              Icon={Cpu}
            />
            <h2 className="text-primary max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {t("skillsSectionTitle")}
            </h2>
          </div>

          <Link
            href="/skills"
            className="text-secondary hover:text-primary inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors"
          >
            <span>{t("viewAllSkills")}</span>
            <ArrowRight className="text-accent size-3.5" strokeWidth={1.75} />
          </Link>
        </div>

        <div className="grid border-t border-l border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="hover:bg-background-contrast/60 flex flex-col justify-between gap-5 border-r border-b border-[var(--color-border)] p-6 transition-colors"
            >
              <div className="space-y-2">
                <span className="text-accent font-mono text-[11px] uppercase tracking-[0.16em]">
                  {category.index} //
                </span>
                <h3 className="text-primary text-lg font-semibold tracking-tight">
                  {category.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.items.slice(0, 8).map((item) => (
                  <span
                    key={item}
                    className="bg-background-contrast text-secondary border border-[var(--color-border)] px-2 py-0.5 font-mono text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
