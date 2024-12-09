import { Header } from "@/components/common/Header";
import { Markdown } from "@/components/common/Markdown";
import { TableOfContents } from "@/components/common/TableOfContents";
import { getTranslations } from "next-intl/server";
import { getUserLocale } from "@/utils/userLocale";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("experiences"),
    description: t("experiencesDesc"),
  };
}

export default async function Page() {
  const t = await getTranslations("Experiences");
  const locale = await getUserLocale();
  const Content = (await import(`./${locale}.mdx`)).default;

  return (
    <>
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <div className="flex flex-col gap-20 lg:flex-row-reverse lg:justify-between">
        <TableOfContents />
        <Markdown>
          <Content />
        </Markdown>
      </div>
    </>
  );
}
