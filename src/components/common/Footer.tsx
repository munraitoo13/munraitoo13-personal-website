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
      {/* top */}
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        {/* navigation */}
        <div className="flex gap-10">
          {/* personal */}
          <div className="flex flex-col gap-3">
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

          {/* professional */}
          <div className="flex flex-col gap-3">
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

        {/* about-me */}
        <div className="flex max-w-lg flex-col gap-2 lg:mx-0">
          {/* title */}
          <b className="">{t("about")}</b>

          {/* phrase */}
          <p>{t("aboutPhrase")}</p>
        </div>
      </div>

      <Divider />

      {/* bottom */}
      <div className="flex items-center justify-between">
        {/* socials */}
        <Socials />

        {/* copy */}
        <p>&copy; 2024, munraitoo13</p>
      </div>
    </footer>
  );
}
