import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Tools | munraitoo13",
  description: "munraitoo13's skills & tools.",
};

export default function SkillsAndTools() {
  return (
    <>
      <Header
        cathegory="Professional"
        pageTitle="Skills & Tools"
        pageDescription="All the tools I use to build those beautiful websites."
      />
    </>
  );
}
