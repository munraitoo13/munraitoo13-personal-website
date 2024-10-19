import { Header } from "@/components/common/Header";
import { Markdown } from "@/components/common/Markdown";
import { TableOfContents } from "@/components/common/TableOfContents";
import { getUserLocale } from "@/utils/userLocale";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Skills and Tools | munraitoo13",
  description: "munraitoo13's skills and tools.",
};

export default async function Page() {
  const t = await getTranslations("SkillsAndTools");
  const locale = await getUserLocale();
  const Content = (await import(`./${locale}.mdx`)).default;

  return (
    <>
      <Header
        category={t("category")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="flex flex-col gap-20 lg:flex-row-reverse lg:justify-between">
        <TableOfContents />
        <Markdown>
          <Content />
        </Markdown>
      </div>
    </>
  );
}
