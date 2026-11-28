import type { ExperiencesData } from "@/types/types";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function ExperiencePreview({ data }: { data: ExperiencesData }) {
  const t = await getTranslations("HomePage");

  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="tui-rail px-6 py-14 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-primary max-w-2xl text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              {t("experienceSectionTitle")}
            </h2>
            <p className="text-tertiary text-sm">{t("experienceSectionLabel")}</p>
          </div>

          <Link
            href="/experiences"
            className="text-secondary hover:text-primary inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-colors"
          >
            <span>{t("viewFullTimeline")}</span>
            <ArrowRight className="text-accent-text size-4" strokeWidth={1.75} />
          </Link>
        </div>

        <div className="grid border border-[var(--color-border)] lg:grid-cols-12">
          <div className="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)] lg:col-span-8 lg:border-r lg:border-b-0">
            {data.work.map((job) => (
              <div key={job.id} className="space-y-4 p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs tabular-nums">
                  <span className="text-accent-text">{job.period}</span>
                  <span className="text-tertiary">{job.location}</span>
                </div>

                <div>
                  <h3 className="text-primary text-xl font-semibold tracking-tight md:text-2xl">
                    {job.role}{" "}
                    <span className="text-secondary font-normal">
                      @ {job.company}
                    </span>
                  </h3>
                  <p className="text-secondary max-w-[65ch] pt-2 text-sm leading-relaxed">
                    {job.summary}
                  </p>
                </div>

                <ul className="space-y-2 text-sm leading-relaxed">
                  {job.highlights.slice(0, 2).map((item) => (
                    <li
                      key={item}
                      className="text-secondary max-w-[65ch] border-l border-[var(--color-border-strong)] pl-3.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-tertiary pt-1 font-mono text-xs">
                  {job.stack.slice(0, 6).join(" · ")}
                </p>
              </div>
            ))}
          </div>

          <aside className="bg-background-contrast flex flex-col justify-between gap-8 p-6 md:p-8 lg:col-span-4">
            <div className="space-y-8">
              <div className="space-y-2 border-b border-[var(--color-border)] pb-6">
                <p className="text-tertiary text-xs font-medium">
                  {t("educationLabel")}
                </p>
                <h3 className="text-primary text-xl font-semibold tracking-tight">
                  {data.education.institution}
                </h3>
                <p className="text-secondary text-sm">
                  {data.education.degree}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 font-mono text-xs tabular-nums">
                  <span className="text-tertiary">{data.education.period}</span>
                  <span className="text-accent-text font-medium">
                    {data.education.metric}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-tertiary text-xs font-medium">
                  {t("languagesLabel")}
                </p>
                <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                  {data.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between py-2.5 text-sm"
                    >
                      <span className="text-primary">{lang.name}</span>
                      <span className="text-tertiary font-mono text-xs">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
