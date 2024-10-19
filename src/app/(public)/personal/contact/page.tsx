import { ContactForm } from "@/components/contact/ContactForm";
import { Header } from "@/components/common/Header";
import { Markdown } from "@/components/common/Markdown";
import { getUserLocale } from "@/lib/locale";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
        <ContactForm />
      </Markdown>
    </>
  );
}
