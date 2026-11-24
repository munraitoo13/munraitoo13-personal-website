import { Header } from "@/components/common/Header";
import { Markdown } from "@/components/common/Markdown";
import { resolveLocale } from "@/i18n/config";
import { getExperiencesContent } from "@/i18n/mdx";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("experiences"),
    description: t("experiencesDesc"),
  };
}

export default async function Page() {
  const t = await getTranslations("Experiences");
  const locale = resolveLocale(await getLocale());
  const Content = getExperiencesContent(locale);

  return (
    <>
      <Header
        sectionIndex="02"
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="tui-rail px-6 py-16">
        <Markdown className="pt-0">
          <Content />
        </Markdown>
      </div>
    </>
  );
}
