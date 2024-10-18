import { MotionH1, MotionP } from "@/components/common/Motion";
import { useTranslations } from "next-intl";

export default function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col gap-5">
      {/* what's up! */}
      <MotionH1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-center text-6xl font-extrabold text-neutral-900 dark:text-white"
      >
        {t("greetings")}
        <br />
        {t("presentation")}
        <span className="text-red-600">{t("name")}</span>.
      </MotionH1>

      {/* aka */}
      <MotionP
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 },
        }}
        className="text-center text-lg"
      >
        <span>{t("description")} </span>
        <span className="font-extrabold text-neutral-900 dark:text-white">
          {t("profession")}
        </span>
        <span> {t("descriptionLocation")}</span>
      </MotionP>
    </div>
  );
}
