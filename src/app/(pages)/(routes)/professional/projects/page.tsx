import Header from "@/app/(pages)/(routes)/_components/Header";
import Markdown from "@/app/(pages)/(routes)/_components/Markdown";
import Contents from "@/app/(pages)/(routes)/_components/TableOfContents";
import Content from "./content.mdx";
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

export default async function Page() {
  const repos = await getRepos();

  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Projects"
        pageDescription="All of my wip and finished projects in one place."
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-between">
        <Contents />
        <Markdown>
          <Content />
        </Markdown>
      </div>
    </>
  );
}