import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";

import SkillsEN from "@/app/skills/en-US.mdx";
import SkillsPT from "@/app/skills/pt-BR.mdx";

import ExperiencesEN from "@/app/experiences/en-US.mdx";
import ExperiencesPT from "@/app/experiences/pt-BR.mdx";

const skillsContent = {
  "en-US": SkillsEN,
  "pt-BR": SkillsPT,
} satisfies Record<Locale, ComponentType>;

const experiencesContent = {
  "en-US": ExperiencesEN,
  "pt-BR": ExperiencesPT,
} satisfies Record<Locale, ComponentType>;

export function getSkillsContent(locale: Locale) {
  return skillsContent[locale];
}

export function getExperiencesContent(locale: Locale) {
  return experiencesContent[locale];
}
