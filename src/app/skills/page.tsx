import { Button } from "@/components/common/Button";
import { Header } from "@/components/common/Header";
import { Markdown } from "@/components/common/Markdown";
import { resolveLocale } from "@/i18n/config";
import { getSkillsContent } from "@/i18n/mdx";
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
  const Content = getSkillsContent(locale);

  return (
    <>
      <Header
        sectionIndex="03"
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="tui-rail px-6 py-16">
        <Markdown className="pt-0">
          <Content />
        </Markdown>

        <section className="bg-background-contrast mt-12 flex max-w-3xl flex-col gap-4 border border-[var(--color-border)] p-8">
          <h2 className="text-primary text-2xl">{t("ctaTitle")}</h2>
          <p className="text-secondary">{t("ctaDescription")}</p>

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
