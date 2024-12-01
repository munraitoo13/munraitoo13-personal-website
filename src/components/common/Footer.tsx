import Link from "next/link";
import { Socials } from "@/components/common/Socials";
import { getPersonalLinks, getProfessionalLinks } from "@/constants/constants";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  const personalLinks = getPersonalLinks(t);
  const professionalLinks = getProfessionalLinks(t);

  return (
    <footer className="flex w-full flex-col items-center bg-gradient-to-b from-white px-10 pb-20 pt-48 dark:from-neutral-950">
      <div className="flex w-full max-w-screen-lg flex-col justify-between gap-10 lg:flex-row">
        {/* navigation */}
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* personal */}
          <div className="flex flex-col items-center gap-3">
            <p className="w-fit text-nowrap rounded-full bg-neutral-100/50 px-5 py-2 dark:bg-neutral-900/25">
              {t("personal")}
            </p>

            {personalLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-neutral-900 hover:text-red-500 dark:text-white"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* professional */}
          <div className="flex flex-col items-center gap-3">
            <p className="w-fit text-nowrap rounded-full bg-neutral-100/50 px-5 py-2 dark:bg-neutral-900/25">
              {t("professional")}
            </p>

            {professionalLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-neutral-900 hover:text-red-500 dark:text-white"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* about-me */}
        <div className="mx-auto flex max-w-lg flex-col items-center gap-2 lg:mx-0">
          {/* title */}
          <p className="w-fit rounded-full bg-neutral-100/50 px-5 py-2 dark:bg-neutral-900/25">
            {t("about")}
          </p>

          {/* phrase */}
          <p className="text-center text-neutral-900 dark:text-white">
            {t("aboutPhrase")}
          </p>

          {/* socials */}
          <Socials />

          {/* copy */}
          <p className="mx-auto">&copy; 2024, munraitoo13</p>
        </div>
      </div>
    </footer>
  );
}
