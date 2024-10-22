import { ContactForm } from "@/components/contact/ContactForm";
import { Header } from "@/components/common/Header";
import { Markdown } from "@/components/common/Markdown";
import { getUserLocale } from "@/utils/userLocale";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Script from "next/script";

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
      <Script
        strategy="beforeInteractive"
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.SITE_KEY}`}
      />

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
