import { Button } from "@/components/common/Button";
import type { CuratedProject } from "@/types/types";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const GITHUB_PROFILE_URL = "https://github.com/munraitoo13";

export async function Projects({ projects }: { projects: CuratedProject[] }) {
  const t = await getTranslations("Projects");

  return (
    <section className="max-w-4xl space-y-12">
      <div className="space-y-5">
        {projects.map(
          ({
            id,
            name,
            tagline,
            summary,
            metrics,
            stack,
            repoUrl,
            liveUrl,
            isPrivateRepo,
            status,
          }) => (
            <article
              key={id}
              className="bg-background-contrast hover:border-accent flex flex-col gap-4 rounded-xl border border-transparent px-8 py-7 shadow-sm transition-all duration-500 ease-[var(--ease-smooth)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-2xl">{name}</h2>
                  <p className="text-accent pt-1 text-sm">{tagline}</p>
                </div>
                <span className="text-tertiary text-xs uppercase tracking-wider">
                  {status}
                </span>
              </div>

              <p className="text-secondary">{summary}</p>

              <ul className="text-secondary flex flex-wrap gap-x-6 gap-y-1 text-sm">
                {metrics.map((metric) => (
                  <li key={metric}>&bull; {metric}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-background text-secondary rounded-md px-2.5 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-tertiary flex flex-wrap items-center gap-4 pt-2 text-sm">
                {liveUrl && (
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent underline underline-offset-4"
                  >
                    {liveUrl.replace(/^https?:\/\//, "")}
                  </Link>
                )}

                {repoUrl ? (
                  <Link
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent underline underline-offset-4"
                  >
                    {t("viewProject")}
                  </Link>
                ) : (
                  isPrivateRepo && <span>Private repository</span>
                )}
              </div>
            </article>
          ),
        )}
      </div>

      <div className="bg-background-contrast flex flex-col gap-4 rounded-xl p-8">
        <h3 className="text-2xl">{t("ctaTitle")}</h3>
        <p className="text-secondary">{t("ctaDescription")}</p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/contact">
            <Button className="font-normal">{t("contactCta")}</Button>
          </Link>

          <Link
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              className="font-normal opacity-80 hover:opacity-100"
            >
              {t("githubCta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
