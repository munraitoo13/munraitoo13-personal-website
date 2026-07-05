import { Button } from "@/components/common/Button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

interface Repos {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
}

const GITHUB_PROFILE_URL = "https://github.com/munraitoo13";

export async function Projects({ repos }: { repos: Repos[] }) {
  const t = await getTranslations("Projects");
  const visibleRepos = repos.filter(({ name }) => name !== "munraitoo13");

  return (
    <section className="max-w-4xl space-y-12">
      <div className="space-y-5">
        {visibleRepos.map(({ html_url, id, name, description, language }) => (
          <Link
            href={html_url}
            key={id}
            target="_blank"
            className="group bg-background-contrast hover:border-accent hover:shadow-background-contrast/80 flex items-center rounded-xl border border-transparent px-8 py-7 shadow-sm transition-all duration-500 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="flex-1">
              <h2 className="group-hover:text-accent text-2xl">{name}</h2>
              <p className="text-secondary pt-2">
                {description || t("fallbackDescription")}
              </p>
              <div className="text-tertiary flex flex-wrap items-center gap-4 pt-4 text-sm">
                <p>{language || t("fallbackLanguage")}</p>
                <span className="group-hover:text-accent">
                  {t("viewProject")}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-background-contrast flex flex-col gap-4 rounded-xl p-8">
        <h3 className="text-2xl">{t("ctaTitle")}</h3>
        <p className="text-secondary">{t("ctaDescription")}</p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/personal/contact">
            <Button className="font-normal">{t("contactCta")}</Button>
          </Link>

          <Link href={GITHUB_PROFILE_URL} target="_blank">
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
