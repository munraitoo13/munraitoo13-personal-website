import { IconFile } from "@tabler/icons-react";
import Link from "next/link";
import { MotionSection } from "@/components/common/Motion";
import { useTranslations } from "next-intl";
import { contactAndResumeVariants } from "@/animations/motionVariants";

export function ContactAndResume() {
  const t = useTranslations("HomePage");

  return (
    <MotionSection
      className="mt-10 flex items-center justify-center gap-5"
      variants={contactAndResumeVariants}
      initial="hidden"
      animate="visible"
    >
      <Link className="button" href="/personal/contact">
        {t("contact")}
      </Link>

      <Link className="flex items-center gap-1" href="#">
        <IconFile stroke={1.25} />
        {t("resume")}
      </Link>
    </MotionSection>
  );
}
