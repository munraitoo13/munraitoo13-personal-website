"use client";

import {
  IconBrandHipchat,
  IconBriefcase2,
  IconStars,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Qualities() {
  const t = useTranslations("HomePage");

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.4 },
      }}
      className="flex w-full flex-col items-stretch justify-center gap-5 lg:flex-row"
    >
      {/* comunicative */}
      <div className="w-full rounded-xl border border-neutral-900/25 p-3">
        <div className="flex items-center">
          <IconBrandHipchat
            size={24}
            stroke={1.25}
            className="z-10 box-content min-w-fit rounded-full bg-red-600 p-3 text-white"
          />

          <h3 className="relative right-5 w-full rounded-r-full bg-neutral-900/25 py-2 pl-10 font-bold text-white">
            {t("quality1")}
          </h3>
        </div>

        <p className="p-3">{t("quality1desc")}</p>
      </div>

      {/* competent */}
      <div className="w-full rounded-xl border border-neutral-900/25 p-3">
        <div className="flex items-center">
          <IconBriefcase2
            size={24}
            stroke={1.25}
            className="z-10 box-content min-w-fit rounded-full bg-red-600 p-3 text-white"
          />

          <h3 className="relative right-5 w-full rounded-r-full bg-neutral-900/25 py-2 pl-10 font-bold text-white">
            {t("quality2")}
          </h3>
        </div>

        <p className="p-3">{t("quality2desc")}</p>
      </div>

      {/* detail-oriented */}
      <div className="w-full rounded-xl border border-neutral-900/25 p-3">
        <div className="flex items-center">
          <IconStars
            size={24}
            stroke={1.25}
            className="z-10 box-content min-w-fit rounded-full bg-red-600 p-3 text-white"
          />

          <h3 className="relative right-5 w-full rounded-r-full bg-neutral-900/25 py-2 pl-10 font-bold text-white">
            {t("quality3")}
          </h3>
        </div>

        <p className="p-3">{t("quality3desc")}</p>
      </div>
    </motion.div>
  );
}
