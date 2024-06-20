import Header from "@/components/Header";
import Project from "@/components/Projects/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | munraitoo13",
  description: "munraitoo13's projects",
};

async function getRepos() {
  const res = await fetch("https://api.github.com/users/munraitoo13/repos", {
    next: {
      revalidate: 30, // refresh data every 30 seconds
    },
  });

  if (!res.ok) throw new Error("Failed to fetch repos");

  return res.json();
}

export default async function Projects() {
  const repos = await getRepos();

  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Projects"
        pageDescription="All of my wip and finished projects in one place."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {repos.map((repo: any) => {
          return (
            <Project
              key={repo.id}
              href={repo.html_url}
              repo={repo.full_name}
              projectTitle={repo.name}
              projectDescription={repo.description}
            />
          );
        })}
      </div>
    </>
  );
}
