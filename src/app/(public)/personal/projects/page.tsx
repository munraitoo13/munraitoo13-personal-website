import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import Projects from "@/components/Projects/Projects";
import { getTranslations } from "next-intl/server";
import { getUserLocale } from "@/services/locale";

export const metadata: Metadata = {
  title: "Projects | munraitoo13",
  description: "munraitoo13's projects",
};

export default async function Page() {
  const repos = await fetch(
    "https://api.github.com/users/munraitoo13/repos",
  ).then((res) => res.json());

  const t = await getTranslations("Projects");
  const locale = await getUserLocale();
  const Content = (await import(`./${locale}.mdx`)).default;

  return (
    <>
      <Header
        category={t("category")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <div className="flex flex-col gap-10">
        <Markdown>
          <Content />
        </Markdown>

        <Projects repos={repos} />
      </div>
    </>
  );
}
