import Link from "next/link";
import { Socials } from "@/components/common/Socials";
import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  const personalLinks = getPersonalLinks(t);
  const professionalLinks = getProfessionalLinks(t);

  return (
    <footer className="layout flex flex-col justify-between pb-5 pt-48">
      {/* top */}
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        {/* navigation */}
        <div className="flex gap-10">
          {/* personal */}
          <div className="flex flex-col gap-3">
            <p className="text-lg text-primary">{t("personal")}</p>

            {personalLinks.map(({ name, href }) => (
              <Link key={name} href={href} className="hover:text-primary">
                {name}
              </Link>
            ))}
          </div>

          {/* professional */}
          <div className="flex flex-col gap-3">
            <p className="text-lg text-primary">{t("professional")}</p>

            {professionalLinks.map(({ name, href }) => (
              <Link key={name} href={href} className="hover:text-primary">
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* about-me */}
        <div className="mx-auto flex max-w-lg flex-col gap-2 lg:mx-0">
          {/* title */}
          <p className="text-lg text-primary">{t("about")}</p>

          {/* phrase */}
          <p>{t("aboutPhrase")}</p>
        </div>
      </div>

      <div className="divider my-5"></div>

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
