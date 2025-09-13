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

import Comunication from "@/images/Communication.jpg";
import Competence from "@/images/Competence.jpg";
import Detail from "@/images/Detail.jpg";

import { BR, DE, FR, US } from "country-flag-icons/react/3x2";

export const LANGUAGES = [
  { Flag: BR, locale: "pt-BR", title: "Português" },
  { Flag: US, locale: "en-US", title: "English" },
  { Flag: FR, locale: "fr-FR", title: "Français" },
  { Flag: DE, locale: "de-DE", title: "Deutsch" },
];

export const getPersonalLinks = (t: (key: string) => string) => [
  { name: t("projects"), href: "/personal/projects" },
  { name: t("contact"), href: "/personal/contact" },
  { name: t("blog"), href: "/personal/blog" },
];
export const getProfessionalLinks = (t: (key: string) => string) => [
  { name: t("skills"), href: "/professional/skills" },
  { name: t("experiences"), href: "/professional/experiences" },
];

export const ADMIN_LINKS = [
  { title: "Home", href: "/" },
  { title: "New Post", href: "/admin/new-post" },
];
export const POST_LANGUAGES = ["Português", "English", "Français", "Deutsch"];

export const SOCIALS = [
  { href: "https://github.com/munraitoo13", Icon: IconBrandGithub },
  { href: "https://www.linkedin.com/in/munraitoo13/", Icon: IconBrandLinkedin },
  { href: "https://www.instagram.com/munraitoo13/", Icon: IconBrandInstagram },
  { href: "https://twitter.com/munraitoo13", Icon: IconBrandX },
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
    image: Comunication,
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

export const myName = {
  "pt-br": "Meu nome é Augusto.",
  "en-us": "My name is Augusto.",
  "fr-fr": "Je m'appelle Augusto.",
  "de-de": "Ich heiße Augusto.",
};
