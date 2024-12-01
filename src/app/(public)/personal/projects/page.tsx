import { Header } from "@/components/common/Header";
import { Projects } from "@/components/projects/Projects";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("projects"),
    description: t("projectsDesc"),
  };
}

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
