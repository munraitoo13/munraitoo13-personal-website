import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import TableOfContents from "@/components/TableOfContents";
import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Contact | munraitoo13",
  description: "munraitoo13's contact.",
};

export default function Page() {
  return (
    <>
      <Header
        category="Personal"
        pageTitle="Contact"
        pageDescription="All the ways you are able to contact me."
      />

      <Markdown>
        <Content />
      </Markdown>
    </>
  );
}
