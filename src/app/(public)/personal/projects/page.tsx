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

async function fetchGitHubRepos() {
  const GITHUB_API_URL = "https://api.github.com/users/munraitoo13/repos";

  try {
    const res = await fetch(GITHUB_API_URL, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      console.error("Failed to fetch GitHub repositories");
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
}

export default async function Page() {
  const t = await getTranslations("Projects");

  const repos = await fetchGitHubRepos();

  return (
    <>
      <Header pageTitle={t("title")} pageDescription={t("description")} />

      <Projects repos={repos} />
    </>
  );
}
