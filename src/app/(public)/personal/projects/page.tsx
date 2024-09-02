import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import { Metadata } from "next";
import Content from "./content.mdx";
import Projects from "@/components/Projects/Projects";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Projects | munraitoo13",
  description: "munraitoo13's projects",
};

export default function Page() {
  const t = useTranslations("Projects");

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
        <Projects />;
      </div>
    </>
  );
}
