import Link from "next/link";
import ThemeToggle from "@/components/Footer/ThemeToggle";
import Socials from "@/components/Navbar/Socials";
import { useTranslations } from "next-intl";
import LocaleChanger from "@/components/Footer/LocaleChanger";

export default function Footer() {
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
    <footer className="flex w-full flex-col items-center bg-gradient-to-b from-white px-10 pb-5 pt-36">
      <div className="flex w-full max-w-screen-xl flex-col gap-10">
        {/* top */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* navigation */}
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* personal */}
            <div className="flex flex-col items-center gap-3">
              <p className="w-fit text-nowrap rounded-full bg-neutral-50 px-5 py-2">
                {t("personal")}
              </p>

              {/* links */}
              {personal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-900 hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* professional */}
            <div className="flex flex-col items-center gap-3">
              <p className="w-fit text-nowrap rounded-full bg-neutral-50 px-5 py-2">
                {t("professional")}
              </p>

              {/* links */}
              {professional.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-900 hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 self-center lg:flex-row lg:self-baseline">
              <LocaleChanger />

              <ThemeToggle />
            </div>
          </div>

          {/* about-me */}
          <div className="mx-auto flex max-w-lg flex-col items-center gap-2 lg:mx-0">
            <p className="w-fit rounded-full bg-neutral-50 px-5 py-2">
              {t("about")}
            </p>

            <p className="text-center text-neutral-900">{t("aboutPhrase")}</p>

            <Socials />
          </div>
        </div>

        {/* copy and repo */}
        <div className="flex justify-between text-xs">
          <p>&copy; 2024, munraitoo13</p>

          <Link
            href="https://github.com/munraitoo13/munraitoo13-personal-website/tree/dev"
            target="_blank"
          >
            {t("repo")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
