import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";

import ContactDE from "@/app/(public)/personal/contact/de-DE.mdx";
import ContactEN from "@/app/(public)/personal/contact/en-US.mdx";
import ContactFR from "@/app/(public)/personal/contact/fr-FR.mdx";
import ContactPT from "@/app/(public)/personal/contact/pt-BR.mdx";

import SkillsDE from "@/app/(public)/professional/skills/de-DE.mdx";
import SkillsEN from "@/app/(public)/professional/skills/en-US.mdx";
import SkillsFR from "@/app/(public)/professional/skills/fr-FR.mdx";
import SkillsPT from "@/app/(public)/professional/skills/pt-BR.mdx";

import ExperiencesDE from "@/app/(public)/professional/experiences/de-DE.mdx";
import ExperiencesEN from "@/app/(public)/professional/experiences/en-US.mdx";
import ExperiencesFR from "@/app/(public)/professional/experiences/fr-FR.mdx";
import ExperiencesPT from "@/app/(public)/professional/experiences/pt-BR.mdx";

const contactContent = {
  "de-DE": ContactDE,
  "en-US": ContactEN,
  "fr-FR": ContactFR,
  "pt-BR": ContactPT,
} satisfies Record<Locale, ComponentType>;

const skillsContent = {
  "de-DE": SkillsDE,
  "en-US": SkillsEN,
  "fr-FR": SkillsFR,
  "pt-BR": SkillsPT,
} satisfies Record<Locale, ComponentType>;

const experiencesContent = {
  "de-DE": ExperiencesDE,
  "en-US": ExperiencesEN,
  "fr-FR": ExperiencesFR,
  "pt-BR": ExperiencesPT,
} satisfies Record<Locale, ComponentType>;

export function getContactContent(locale: Locale) {
  return contactContent[locale];
}

export function getSkillsContent(locale: Locale) {
  return skillsContent[locale];
}

export function getExperiencesContent(locale: Locale) {
  return experiencesContent[locale];
}
