"use client";
import { Stacks } from "@/components/home/Stacks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Header() {
  const t = useTranslations("HomePage");

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.header
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex flex-col pt-48"
    >
      <div className="flex flex-col gap-3">
        {/* greet */}
        <motion.p variants={item} className="text-xl">
          {t("greetings")}
        </motion.p>

        {/* title */}
        <motion.h1 variants={item} className="text-5xl">
          {t("presentation")}
        </motion.h1>

        {/* subtitle */}
        <motion.p variants={item} className="text-xl">
          <span>{t("aka")} </span>

          <span className="italic">{t("nickname")}</span>

          <span>, {t("profession")}</span>
        </motion.p>
      </div>

      {/* stack */}
      <motion.div variants={item} className="mt-24 flex items-center gap-1">
        <Stacks />
      </motion.div>

      {/* contact and resume */}
      <motion.section className="mt-10 flex gap-5" variants={item}>
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          className="button button--solid"
        >
          <Link href="/personal/contact">{t("contact")}</Link>
        </motion.div>

        <Link className="flex items-center gap-1 hover:text-primary" href="#">
          {t("resume")}
        </Link>
      </motion.section>
    </motion.header>
  );
}
