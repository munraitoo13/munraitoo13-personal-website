import { Socials } from "@/components/common/Socials";
import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Footer() {
  const t = await getTranslations("Footer");

  const personalLinks = getPersonalLinks(t);
  const professionalLinks = getProfessionalLinks(t);

  return (
    <footer className="pt-48 pb-5">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <b>{t("personal")}</b>

            {personalLinks.map(({ name, href }) => (
              <Link key={name} href={href} className="hover:text-accent">
                {name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <b>{t("professional")}</b>

            {professionalLinks.map(({ name, href }) => (
              <Link key={name} href={href} className="hover:text-accent">
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-lg space-y-2">
          <strong className="block">{t("about")}</strong>
          <p>{t("aboutPhrase")}</p>
        </div>
      </div>

      <hr className="border-background-contrast my-4" />

      <div className="flex items-center justify-between">
        <Socials />
        <p>&copy; {new Date().getFullYear()}, munraitoo13</p>
      </div>
    </footer>
  );
}
