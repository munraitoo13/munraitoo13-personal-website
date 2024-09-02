import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import Contents from "@/components/TableOfContents";
import { Metadata } from "next";
import Content from "./content.mdx";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Experiences | munraitoo13",
  description: "munraitoo13's experiences",
};

export default function Page() {
  const t = useTranslations("Experiences");

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
