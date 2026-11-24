import { Header } from "@/components/home/Header";
import { Phrase } from "@/components/home/Phrase";
import { PhraseDescription } from "@/components/home/PhraseDescription";
import { Qualities } from "@/components/home/Qualities";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("home"),
    description: t("homeDesc"),
  };
}

export default function Page() {
  return (
    <>
      <Header />
      <Qualities />
      <Phrase />
      <PhraseDescription />
    </>
  );
}
