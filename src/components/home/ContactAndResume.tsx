import { IconFile } from "@tabler/icons-react";
import Link from "next/link";
import { MotionDiv } from "@/components/common/Motion";
import { useTranslations } from "next-intl";

export default function ContactAndResume() {
  const t = useTranslations("HomePage");

  return (
    <MotionDiv
      className="mt-10 flex items-center justify-center gap-5"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Link
        className="flex items-center rounded-full bg-red-600 px-5 py-3 text-white"
        href="/personal/contact"
      >
        {t("contact")}
      </Link>

      <Link className="flex items-center gap-1" href="#">
        <IconFile stroke={1.25} />
        {t("resume")}
      </Link>
    </MotionDiv>
  );
}
