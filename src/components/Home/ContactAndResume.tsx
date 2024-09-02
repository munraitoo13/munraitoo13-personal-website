"use client";

import { IconFile } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactAndResume() {
  const t = useTranslations("HomePage");

  return (
    <motion.div
      className="mt-10 flex gap-5"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
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
    </motion.div>
  );
}
