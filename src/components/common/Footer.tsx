import Link from "next/link";
import { Socials } from "@/components/common/Socials";
import { LocaleChanger } from "@/components/common/LocaleChanger";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  // professional links
  const professional = [
    { name: t("skillsAndTools"), href: "/professional/skills-and-tools" },
    { name: t("experiences"), href: "/professional/experiences" },
  ];

  // personal links
  const personal = [
    { name: t("projects"), href: "/personal/projects" },
    { name: t("contact"), href: "/personal/contact" },
    { name: t("blog"), href: "/personal/blog" },
  ];

  return (
    <footer className="flex w-full flex-col items-center bg-gradient-to-b from-white px-10 pb-24 pt-48 dark:from-neutral-950">
      <div className="flex w-full max-w-screen-xl flex-col gap-10">
        {/* top */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* navigation */}
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* personal */}
            <div className="flex flex-col items-center gap-3">
              <p className="w-fit text-nowrap rounded-full bg-neutral-50 px-5 py-2 dark:bg-neutral-900/25">
                {t("personal")}
              </p>

              {/* links */}
              {personal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-900 hover:text-red-600 dark:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* professional */}
            <div className="flex flex-col items-center gap-3">
              <p className="w-fit text-nowrap rounded-full bg-neutral-50 px-5 py-2 dark:bg-neutral-900/25">
                {t("professional")}
              </p>

              {/* links */}
              {professional.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-900 hover:text-red-600 dark:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 self-center lg:flex-row lg:self-baseline">
              <LocaleChanger />
            </div>
          </div>

          {/* about-me */}
          <div className="mx-auto flex max-w-lg flex-col items-center gap-2 lg:mx-0">
            <p className="w-fit rounded-full bg-neutral-50 px-5 py-2 dark:bg-neutral-900/25">
              {t("about")}
            </p>

            <p className="text-center text-neutral-900 dark:text-white">
              {t("aboutPhrase")}
            </p>

            <Socials />

            <Link
              href="https://github.com/munraitoo13/munraitoo13-personal-website/tree/dev"
              target="_blank"
              className="text-neutral-300 dark:text-neutral-700"
            >
              {t("repo")}
            </Link>
          </div>
        </div>

        {/* copy */}
        <p className="mx-auto">&copy; 2024, munraitoo13</p>
      </div>
    </footer>
  );
}
