import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getUserLocale } from "@/lib";

export const metadata: Metadata = {
  title: "Contact | munraitoo13",
  description: "munraitoo13's contact.",
};

export default async function Page() {
  const t = await getTranslations("Contact");
  const locale = await getUserLocale();
  const Content = (await import(`./${locale}.mdx`)).default;

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
