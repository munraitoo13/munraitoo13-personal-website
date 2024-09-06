import { MotionH1, MotionP } from "@/components/Motion";
import { useTranslations } from "next-intl";

export default function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col gap-5">
      <MotionH1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-6xl font-extrabold text-neutral-900"
      >
        {t("greetings")}
        <br />
        {t("presentation")}
        <span className="text-red-600">{t("name")}</span>.
      </MotionH1>

      <MotionP
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 },
        }}
        className="text-lg"
      >
        <span>{t("description")} </span>
        <span className="font-extrabold text-neutral-900">
          {t("profession")}
        </span>
        <span> {t("descriptionLocation")}</span>
      </MotionP>
    </div>
  );
}
