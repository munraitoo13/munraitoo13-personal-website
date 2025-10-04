import { Stacks } from "@/components/home/Stacks";
import { getTranslations } from "next-intl/server";
import { IconFile } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/common/Button";

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
        <Link
          href="https://docs.google.com/document/d/1wvD0VANx0zDwaHBPVV6v-D3JQe9oTQiXYB_TrHk9tgw"
          target="_blank"
        >
          <Button rounded className="cursor-pointer" Icon={IconFile}>
            {t("resume")}
          </Button>
        </Link>

        <Link
          href="/personal/contact"
          className="hover:text-accent text-primary"
        >
          {t("contact")}
        </Link>
      </div>
    </header>
  );
}
