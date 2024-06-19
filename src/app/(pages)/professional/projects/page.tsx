import Header from "@/components/Header";
import Project from "@/components/Projects/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | munraitoo13",
  description: "munraitoo13's projects",
};

async function getRepos() {
  const res = await fetch("https://api.github.com/users/munraitoo13/repos");
  return res.json();
}

export default async function Projects() {
  const repos = await getRepos();

  return (
    <>
      <Header
        pageTitle="Projects"
        pageDescription="All of my wip and finished projects in one place."
      />

      {repos.map((repo: any) => {
        return (
          <Project
            href={repo.html_url}
            repo={repo.full_name}
            projectTitle="Project Title"
            projectDescription={repo.description}
          />
        );
      })}
    </>
  );
}
