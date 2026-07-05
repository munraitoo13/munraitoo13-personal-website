import { Header } from "@/components/common/Header";
import { Markdown } from "@/components/common/Markdown";
import { Button } from "@/components/common/Button";
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
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <Markdown className="pt-6">
        <Content />
      </Markdown>

      <section className="bg-background-contrast mt-12 flex max-w-4xl flex-col gap-4 rounded-xl p-8">
        <h2 className="text-2xl">{t("ctaTitle")}</h2>
        <p className="text-secondary">{t("ctaDescription")}</p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/personal/contact">
            <Button className="font-normal">{t("contactCta")}</Button>
          </Link>

          <Link href="/personal/projects">
            <Button variant="secondary" className="font-normal">
              {t("projectsCta")}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
