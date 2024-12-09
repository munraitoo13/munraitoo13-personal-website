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
import { BR, DE, FR, US } from "country-flag-icons/react/3x2";

// languages
export const LANGUAGES = [
  { Flag: BR, locale: "pt-BR", title: "Português" },
  { Flag: US, locale: "en-US", title: "English" },
  { Flag: FR, locale: "fr-FR", title: "Français" },
  { Flag: DE, locale: "de-DE", title: "Deutsch" },
];

// nav links
export const getPersonalLinks = (t: (key: string) => string) => [
  { name: t("projects"), href: "/personal/projects" },
  { name: t("contact"), href: "/personal/contact" },
  { name: t("blog"), href: "/personal/blog" },
];
export const getProfessionalLinks = (t: (key: string) => string) => [
  { name: t("skills"), href: "/professional/skills" },
  { name: t("experiences"), href: "/professional/experiences" },
];

// admin constant
export const ADMIN_LINKS = [{ title: "New Post", href: "/admin/new-post" }];
export const POST_LANGUAGES = ["Português", "English", "Français", "Deutsch"];

// socials
export const SOCIALS = [
  { href: "https://github.com/munraitoo13", Icon: IconBrandGithub },
  { href: "https://www.linkedin.com/in/munraitoo13/", Icon: IconBrandLinkedin },
  { href: "https://www.instagram.com/munraitoo13/", Icon: IconBrandInstagram },
  { href: "https://twitter.com/munraitoo13", Icon: IconBrandX },
];

// stacks
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

// qualities
export const getQualities = (t: (key: string) => string) => [
  {
    title: "🗣️ " + t("quality1"),
    description: t("quality1desc"),
  },
  {
    title: "🧠 " + t("quality2"),
    description: t("quality2desc"),
  },
  {
    title: "🔍 " + t("quality3"),
    description: t("quality3desc"),
  },
];

// phrase description
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
