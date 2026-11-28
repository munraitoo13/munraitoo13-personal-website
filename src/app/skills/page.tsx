import { buttonClasses } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { getSkillsData } from "@/data/skills";
import { resolveLocale } from "@/i18n/config";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("skills"),
    description: t("skillsDesc"),
  };
}

export default async function Page() {
  const t = await getTranslations("skills");
  const locale = resolveLocale(await getLocale());
  const categories = getSkillsData(locale);

  return (
    <>
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <div className="tui-rail space-y-14 px-6 py-12 md:py-16">
        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {categories.map((category) => (
            <section
              key={category.id}
              className="grid gap-4 py-8 lg:grid-cols-12 lg:items-baseline lg:gap-10"
            >
              <div className="space-y-1.5 lg:col-span-5">
                <h2 className="text-primary text-xl font-semibold tracking-tight">
                  {category.title}
                </h2>
                <p className="text-secondary max-w-[48ch] text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              <p className="text-primary font-mono text-xs leading-relaxed lg:col-span-7">
                {category.items.join(" · ")}
              </p>
            </section>
          ))}
        </div>

        <section className="flex flex-col justify-between gap-6 border-t border-[var(--color-border)] pt-8 md:flex-row md:items-center">
          <div className="space-y-1.5">
            <h2 className="text-primary text-xl font-semibold tracking-tight">
              {t("ctaTitle")}
            </h2>
            <p className="text-secondary max-w-[60ch] text-sm leading-relaxed">
              {t("ctaDescription")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className={buttonClasses({ variant: "primary" })}
            >
              {t("contactCta")}
            </Link>

            <Link
              href="/projects"
              className={buttonClasses({ variant: "secondary" })}
            >
              {t("projectsCta")}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
