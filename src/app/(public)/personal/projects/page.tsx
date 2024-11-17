import { Header } from "@/components/common/Header";
import { Projects } from "@/components/projects/Projects";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Projects | munraitoo13",
  description: "munraitoo13's projects",
};

export default async function Page() {
  const repos = await fetch(
    "https://api.github.com/users/munraitoo13/repos",
  ).then((res) => res.json());

  const t = await getTranslations("Projects");

  return (
    <>
      <Header
        category={t("category")}
        pageTitle={t("title")}
        pageDescription={t("description")}
      />

      <Projects repos={repos} />
    </>
  );
}
