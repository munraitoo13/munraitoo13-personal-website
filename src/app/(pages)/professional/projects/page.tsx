import Header from "@/components/Header";
import Project from "@/components/Projects/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | munraitoo13",
  description: "munraitoo13's projects",
};

export default function Projects() {
  return (
    <>
      <Header
        pageTitle="Projects"
        pageDescription="All of my wip and finished projects in one place."
      />

      <Project />
    </>
  );
}
