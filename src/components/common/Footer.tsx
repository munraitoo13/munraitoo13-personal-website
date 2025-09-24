import { Socials } from "@/components/common/Socials";
import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Divider from "@/components/common/Divider";

export function Footer() {
  const t = useTranslations("Footer");

  const personalLinks = getPersonalLinks(t);
  const professionalLinks = getProfessionalLinks(t);

  return (
    <footer className="flex flex-col justify-between pt-48 pb-5">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <b className="">{t("personal")}</b>

            {personalLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="hover:text-accent transition-colors duration-500"
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <b className="">{t("professional")}</b>

            {professionalLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="hover:text-accent transition-colors duration-500"
              >
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

      <Divider />

      <div className="text-tertiary flex items-center justify-between">
        <Socials />
        <p>&copy; 2024, munraitoo13</p>
      </div>
    </footer>
  );
}
