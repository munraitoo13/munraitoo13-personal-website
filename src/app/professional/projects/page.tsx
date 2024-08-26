import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import getRepos from "@/lib/getRepos";
import { Metadata } from "next";
import Content from "./content.mdx";
import Projects from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects | munraitoo13",
  description: "munraitoo13's projects",
};

export default async function Page() {
  const repos = await getRepos();

  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Projects"
        pageDescription="All of my wip and finished projects in one place."
      />

      <div className="flex flex-col gap-10">
        <Markdown>
          <Content />
        </Markdown>

        <div className="flex flex-col gap-20">
          {repos.map((repo: any) => {
            return (
              <Projects
                key={repo.id}
                href={repo.html_url}
                repo={repo.full_name}
                projectTitle={repo.name}
                projectDescription={repo.description}
                language={repo.language}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
