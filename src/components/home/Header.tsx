"use client";
import { Stacks } from "@/components/home/Stacks";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

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
      className="flex flex-col gap-4 pt-48"
    >
      {/* greet */}
      <motion.p variants={item} className="text-xl">
        {t("greetings")}
      </motion.p>

      {/* title */}
      <motion.h1 variants={item} className="text-5xl font-bold text-primary">
        {t("presentation")}
      </motion.h1>

      {/* subtitle */}
      <motion.p variants={item} className="text-xl">
        <span>{t("aka")} </span>

        <span className="italic">{t("nickname")}</span>

        <span>, {t("profession")}</span>
      </motion.p>

      {/* stack */}
      <motion.div variants={item} className="flex items-center gap-1">
        <Stacks />
      </motion.div>

      {/* contact and resume */}
      <motion.section className="flex gap-5 pt-16" variants={item}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hover:bg-primary/95 cursor-pointer rounded-xl bg-primary px-5 py-3 text-background"
        >
          <Link href="/personal/contact">{t("contact")}</Link>
        </motion.div>

        <Link className="flex items-center gap-1" href="#">
          {t("resume")}
        </Link>
      </motion.section>
    </motion.header>
  );
}
