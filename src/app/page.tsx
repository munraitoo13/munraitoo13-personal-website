import { BlogAndContact } from "@/components/home/BlogAndContact";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Header } from "@/components/home/Header";
import { StackOverview } from "@/components/home/StackOverview";
import { getExperiencesData } from "@/data/experiences";
import { getCuratedProjects } from "@/data/projects";
import { getSkillsData } from "@/data/skills";
import { resolveLocale } from "@/i18n/config";
import { getAllPosts } from "@/lib/blog";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("home"),
    description: t("homeDesc"),
  };
}

export default async function Page() {
  const locale = resolveLocale(await getLocale());
  const t = await getTranslations("HomePage");
  const tProjects = await getTranslations("Projects");

  const projects = getCuratedProjects(locale);
  const experiences = getExperiencesData(locale);
  const skills = getSkillsData(locale);
  const latestPost = getAllPosts()[0] ?? null;

  return (
    <>
      <Header />

      <FeaturedProjects
        projects={projects}
        sectionLabel={t("projectsSectionLabel")}
        sectionTitle={t("projectsSectionTitle")}
        viewAllLabel={t("viewAllProjects")}
        privateRepoLabel={t("privateRepo")}
        visitLiveLabel={t("visitLive")}
        viewRepoLabel={tProjects("viewProject")}
      />

      <ExperiencePreview data={experiences} />

      <StackOverview categories={skills} />

      <BlogAndContact latestPost={latestPost} locale={locale} />
    </>
  );
}
