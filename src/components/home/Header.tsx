import { Button } from "@/components/common/Button";
import { Stacks } from "@/components/home/Stacks";
import { RESUME_URL } from "@/constants/constants";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Header() {
  const t = await getTranslations("HomePage");

  return (
    <header className="flex flex-col items-center gap-2 pt-48 text-center">
      <p>{t("greetings")}</p>
      <h1 className="text-5xl">{t("presentation")}</h1>
      <p>
        <span>{t("aka")} </span>
        <span className="italic">{t("nickname")}</span>
        <span>, {t("profession")}</span>
      </p>

      <Stacks />

      <div className="flex items-center gap-4 pt-24">
        <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          <Button rounded className="cursor-pointer font-normal">
            {t("resume")}
          </Button>
        </Link>

        <Link href="/contact" className="hover:text-accent text-primary">
          {t("contact")}
        </Link>
      </div>
    </header>
  );
}
