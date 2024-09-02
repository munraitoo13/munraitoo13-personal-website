import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import Content from "./content.mdx";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Contact | munraitoo13",
  description: "munraitoo13's contact.",
};

export default function Page() {
  const t = useTranslations("Contact");

  return (
    <>
      <Header
        category={t("category")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <Markdown>
        <Content />
      </Markdown>
    </>
  );
}
