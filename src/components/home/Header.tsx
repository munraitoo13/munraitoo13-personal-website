"use client";
import { Stacks } from "@/components/home/Stacks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Header() {
  const t = useTranslations("HomePage");

  const variants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "anticipate" },
    },
  };

  return (
    <motion.header
      variants={variants}
      initial="hidden"
      animate="visible"
      className="layout mb-24 mt-48 flex flex-col items-center gap-2 text-center"
    >
      {/* greet */}
      <motion.p variants={item}>{t("greetings")}</motion.p>

      {/* title */}
      <motion.h1 variants={item} className="text-primary text-5xl font-medium">
        {t("presentation")}
      </motion.h1>

      {/* subtitle */}
      <motion.p variants={item}>
        <span>{t("aka")} </span>

        <span className="italic">{t("nickname")}</span>

        <span>, {t("profession")}</span>
      </motion.p>

      {/* stack */}
      <motion.div
        variants={item}
        className="mt-4 flex w-fit items-center gap-1"
      >
        <Stacks />
      </motion.div>

      {/* contact and resume */}
      <motion.section className="mt-24 flex gap-4" variants={item}>
        <Link href="/personal/contact" className="button button--solid">
          {t("contact")}
        </Link>

        <Link
          className="flex items-center gap-1 transition-colors duration-500 hover:text-accent"
          href="#"
        >
          {t("resume")}
        </Link>
      </motion.section>
    </motion.header>
  );
}
