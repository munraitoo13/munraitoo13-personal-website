import { getQualities } from "@/constants/constants";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function Qualities() {
  const t = await getTranslations("HomePage");
  const qualities = getQualities(t);

  return (
    <section className="space-y-12 pt-48">
      <div className="max-w-sm">
        <h2 className="text-2xl">{t("myQualities")}</h2>
        <p>{t("myQualitiesDesc")}</p>
      </div>

      <div className="grid grid-cols-1 grid-rows-3 gap-24 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4">
        {qualities.map(({ title, description, image }) => (
          <div key={title} className="space-y-4 text-center">
            <Image
              src={image}
              alt={title}
              className="h-[500px] w-full rounded-xl object-cover hover:opacity-75"
              placeholder="blur"
            />

            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
