"use client";
import { Stacks } from "@/components/home/Stacks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconFile } from "@tabler/icons-react";
import Link from "next/link";
import Button from "@/components/common/Button";

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
      className="flex flex-col items-center gap-2 pb-24 pt-48 text-center"
    >
      {/* greet */}
      <motion.p variants={item}>{t("greetings")}</motion.p>

      {/* title */}
      <motion.h1 variants={item} className="text-5xl font-medium text-primary">
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
        <Link
          href="https://docs.google.com/document/d/1wvD0VANx0zDwaHBPVV6v-D3JQe9oTQiXYB_TrHk9tgw"
          target="_blank"
        >
          <Button Icon={IconFile}>{t("resume")}</Button>
        </Link>

        <Link
          href="/personal/contact"
          className="flex items-center gap-1 transition-colors duration-500 hover:text-accent"
        >
          {t("contact")}
        </Link>
      </motion.section>
    </motion.header>
  );
}
