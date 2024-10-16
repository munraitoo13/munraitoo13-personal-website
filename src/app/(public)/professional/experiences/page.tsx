import Header from "@/components/common/Header";
import Markdown from "@/components/common/Markdown";
import Contents from "@/components/common/TableOfContents";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getUserLocale } from "@/lib";

export const metadata: Metadata = {
  title: "Experiences | munraitoo13",
  description: "munraitoo13's experiences",
};

export default async function Page() {
  const t = await getTranslations("Experiences");
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
        <Contents />
        <Markdown>
          <Content />
        </Markdown>
      </div>
    </>
  );
}
