import { Button } from "@/components/common/Button";
import { SectionLabel } from "@/components/common/SectionLabel";
import { RESUME_URL } from "@/constants/constants";
import type { ExperiencesData } from "@/types/types";
import { ArrowRight, ArrowUpRight, Briefcase } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function ExperiencePreview({ data }: { data: ExperiencesData }) {
  const t = await getTranslations("HomePage");

  return (
    <section className="border-b border-[var(--color-border)]">
      <div className="tui-rail px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <SectionLabel
              index="02"
              label={t("experienceSectionLabel")}
              Icon={Briefcase}
            />
            <h2 className="text-primary max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {t("experienceSectionTitle")}
            </h2>
          </div>

          <Link
            href="/experiences"
            className="text-secondary hover:text-primary inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors"
          >
            <span>{t("viewFullTimeline")}</span>
            <ArrowRight className="text-accent size-3.5" strokeWidth={1.75} />
          </Link>
        </div>

        <div className="grid border border-[var(--color-border)] lg:grid-cols-12">
          <div className="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)] lg:col-span-8 lg:border-r lg:border-b-0">
            {data.work.map((job) => (
              <div key={job.id} className="space-y-4 p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-accent font-mono text-xs uppercase tracking-[0.14em]">
                    {job.period}
                  </span>
                  <span className="text-tertiary font-mono text-xs uppercase tracking-[0.14em]">
                    {job.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-primary text-xl font-semibold tracking-tight md:text-2xl">
                    {job.role}{" "}
                    <span className="text-secondary font-normal">
                      @ {job.company}
                    </span>
                  </h3>
                  <p className="text-secondary pt-2 text-sm leading-relaxed">
                    {job.summary}
                  </p>
                </div>

                <ul className="space-y-2 text-sm leading-relaxed">
                  {job.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="text-secondary flex gap-2.5">
                      <span
                        className="text-accent mt-0.5 font-mono text-xs"
                        aria-hidden="true"
                      >
                        &gt;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="bg-background-contrast text-secondary border border-[var(--color-border)] px-2 py-0.5 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="bg-background-contrast flex flex-col justify-between gap-8 p-6 md:p-8 lg:col-span-4">
            <div className="space-y-6">
              <div className="space-y-2 border-b border-[var(--color-border)] pb-6">
                <p className="text-tertiary font-mono text-[11px] uppercase tracking-[0.16em]">
                  // {t("educationLabel")}
                </p>
                <h3 className="text-primary text-xl font-semibold tracking-tight">
                  {data.education.institution}
                </h3>
                <p className="text-secondary text-sm">
                  {data.education.degree}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 font-mono text-xs">
                  <span className="text-tertiary">{data.education.period}</span>
                  <span className="text-accent font-medium">
                    {data.education.metric}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-tertiary font-mono text-[11px] uppercase tracking-[0.16em]">
                  // {t("languagesLabel")}
                </p>
                <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)]">
                  {data.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="bg-background flex items-center justify-between px-3.5 py-2.5 text-sm"
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

            <Link
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button fullWidth variant="secondary">
                <span>{t("resume")}</span>
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Button>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
