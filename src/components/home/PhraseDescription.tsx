import { getPhraseDescription } from "@/constants/constants";
import { getTranslations } from "next-intl/server";

export async function PhraseDescription() {
  const t = await getTranslations("HomePage");
  const phraseDescriptions = getPhraseDescription(t);

  return (
    <section className="space-y-12 pt-48">
      {phraseDescriptions.map(({ question, title, description }) => (
        <div className="flex flex-col gap-2" key={question}>
          <p className="text-accent">{question}</p>
          <h3 className="text-lg">{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}
