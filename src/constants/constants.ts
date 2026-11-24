import type { Locale } from "@/i18n/config";
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
  IconBrandX,
} from "@tabler/icons-react";

import Communication from "@/images/Communication.jpg";
import Competence from "@/images/Competence.jpg";
import Detail from "@/images/Detail.jpg";

import { BR, US } from "country-flag-icons/react/3x2";

export const RESUME_URL =
  "https://drive.google.com/file/d/1krSImDXFQfqe6gMo8QRtCltPD-eZ8z1P/view?usp=sharing";

export const CONTACT_EMAIL = "munraitoo13@gmail.com";

export const LANGUAGES: { Flag: typeof US; locale: Locale; title: string }[] = [
  { Flag: BR, locale: "pt-BR", title: "Português" },
  { Flag: US, locale: "en-US", title: "English" },
];

export const getPersonalLinks = (t: (key: string) => string) => [
  { name: t("projects"), href: "/projects" },
  { name: t("contact"), href: "/contact" },
  { name: t("blog"), href: "/blog" },
];

export const getProfessionalLinks = (t: (key: string) => string) => [
  { name: t("skills"), href: "/skills" },
  { name: t("experiences"), href: "/experiences" },
];

export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/munraitoo13",
    Icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/munraitoo13/",
    Icon: IconBrandLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/munraitoo13/",
    Icon: IconBrandInstagram,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/munraitoo13",
    Icon: IconBrandX,
  },
];

export const STACKS = [
  { name: "TypeScript", Icon: IconBrandTypescript },
  { name: "React", Icon: IconBrandReact },
  { name: "Next.js", Icon: IconBrandNextjs },
  { name: "Tailwind", Icon: IconBrandTailwind },
  { name: "Node.js", Icon: IconBrandNodejs },
  { name: "MongoDB", Icon: IconBrandMongodb },
  { name: "VSCode", Icon: IconBrandVscode },
  { name: "Figma", Icon: IconBrandFigma },
];

export const getQualities = (t: (key: string) => string) => [
  {
    image: Competence,
    title: t("quality2"),
    description: t("quality2desc"),
  },
  {
    image: Communication,
    title: t("quality1"),
    description: t("quality1desc"),
  },
  {
    image: Detail,
    title: t("quality3"),
    description: t("quality3desc"),
  },
];

export const getPhraseDescription = (t: (key: string) => string) => [
  {
    question: t("whySimple"),
    title: t("whySimpleTitle"),
    description: t("whySimpleDesc"),
  },
  {
    question: t("yetStunning"),
    title: t("yetStunningTitle"),
    description: t("yetStunningDesc"),
  },
  {
    question: t("insideAndOutExpl"),
    title: t("insideAndOutExplTitle"),
    description: t("insideAndOutExplDesc"),
  },
];
