import { Header } from "@/components/common/Header";
import { Projects } from "@/components/projects/Projects";
import { getCuratedProjects } from "@/data/projects";
import { resolveLocale } from "@/i18n/config";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("projects"),
    description: t("projectsDesc"),
  };
}

export default async function Page() {
  const t = await getTranslations("Projects");
  const locale = resolveLocale(await getLocale());
  const projects = getCuratedProjects(locale);

  return (
    <>
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <Projects projects={projects} />
    </>
  );
}
