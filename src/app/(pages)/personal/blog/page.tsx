import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | munraitoo13",
  description: "munraitoo13's blog.",
};

export default function Blog() {
  return (
    <>
      <Header
        cathegory="Personal"
        pageTitle="Blog"
        pageDescription="Personal blog posts about technology and more."
      />
    </>
  );
}
