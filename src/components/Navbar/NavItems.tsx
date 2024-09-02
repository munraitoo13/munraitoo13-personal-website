import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavItems() {
  const t = useTranslations("NavBar");

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
    <div className="flex flex-col gap-5 lg:flex-row">
      {/* professional */}
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <p className="rounded-full bg-neutral-900/25 px-5 py-2">
          {t("professional")}
        </p>

        {/* links */}
        {professional.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white hover:text-red-600"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* personal */}
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <p className="rounded-full bg-neutral-900/25 px-5 py-2">
          {t("personal")}
        </p>

        {/* links */}
        {personal.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white hover:text-red-600"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
