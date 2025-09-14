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
  const t = await getTranslations("Projects");

  const data = await fetch("https://api.github.com/users/munraitoo13/repos", {
    next: { revalidate: 300 },
  });
  if (!data.ok) {
    throw new Error("Failed to fetch repos");
  }

  const repos = await data.json();

  return (
    <>
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <Projects repos={repos} />
    </>
  );
}
