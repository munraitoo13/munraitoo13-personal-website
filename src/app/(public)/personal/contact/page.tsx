import { ContactForm } from "@/components/contact/ContactForm";
import { Header } from "@/components/common/Header";
import { Markdown } from "@/components/common/Markdown";
import { getUserLocale } from "@/utils/userLocale";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("contact"),
    description: t("contactDesc"),
  };
}

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
        <ContactForm />
      </Markdown>
    </>
  );
}
