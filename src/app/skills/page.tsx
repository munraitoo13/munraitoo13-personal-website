import { Button } from "@/components/common/Button";
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
      <Header
        sectionIndex="03"
        sectionLabel={t("label")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="tui-rail space-y-12 px-6 py-16">
        <div className="grid border-t border-l border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <section
              key={category.id}
              className="bg-background-contrast/40 hover:bg-background-contrast flex flex-col justify-between gap-6 border-r border-b border-[var(--color-border)] p-6 transition-colors md:p-7"
            >
              <div className="space-y-2.5">
                <span className="text-accent font-mono text-xs uppercase tracking-[0.16em]">
                  {category.index} //
                </span>
                <h2 className="text-primary text-xl font-semibold tracking-tight">
                  {category.title}
                </h2>
                <p className="text-secondary text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="bg-background text-secondary border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="bg-background-contrast flex flex-col gap-4 border border-[var(--color-border)] p-6 md:p-8">
          <h2 className="text-primary text-2xl font-semibold tracking-tight">
            {t("ctaTitle")}
          </h2>
          <p className="text-secondary max-w-2xl leading-relaxed">
            {t("ctaDescription")}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <Button>{t("contactCta")}</Button>
            </Link>

            <Link href="/projects">
              <Button variant="secondary">{t("projectsCta")}</Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
