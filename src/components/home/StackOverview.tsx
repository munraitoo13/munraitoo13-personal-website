import type { SkillCategory } from "@/types/types";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function StackOverview({
  categories,
}: {
  categories: SkillCategory[];
}) {
  const t = await getTranslations("HomePage");
  const leadCategories = categories.slice(0, 3);

  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="tui-rail px-6 py-14 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-primary max-w-2xl text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              {t("skillsSectionTitle")}
            </h2>
            <p className="text-tertiary text-sm">{t("skillsSectionLabel")}</p>
          </div>

          <Link
            href="/skills"
            className="text-secondary hover:text-primary inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-colors"
          >
            <span>{t("viewAllSkills")}</span>
            <ArrowRight className="text-accent-text size-4" strokeWidth={1.75} />
          </Link>
        </div>

        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {leadCategories.map((category) => (
            <div
              key={category.id}
              className="grid gap-4 py-6 lg:grid-cols-12 lg:items-baseline lg:gap-8"
            >
              <div className="space-y-1 lg:col-span-5">
                <h3 className="text-primary text-lg font-semibold tracking-tight">
                  {category.title}
                </h3>
                <p className="text-secondary max-w-[48ch] text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              <p className="text-primary font-mono text-xs leading-relaxed lg:col-span-7">
                {category.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
