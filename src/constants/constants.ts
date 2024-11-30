import { BR, US, DE, FR } from "country-flag-icons/react/3x2";

// languages
export const LANGUAGES = [
  { Component: BR, locale: "pt-BR", title: "Português" },
  { Component: US, locale: "en-US", title: "English" },
  { Component: FR, locale: "fr-FR", title: "Français" },
  { Component: DE, locale: "de-DE", title: "Deutsch" },
];

// nav links
export const getPersonalLinks = (t: (key: string) => string) => [
  { name: t("projects"), href: "/personal/projects" },
  { name: t("contact"), href: "/personal/contact" },
  { name: t("blog"), href: "/personal/blog" },
];
export const getProfessionalLinks = (t: (key: string) => string) => [
  { name: t("skills"), href: "/professional/skills-and-tools" },
  { name: t("experiences"), href: "/professional/experiences" },
];

// admin constant
export const ADMIN_LINKS = [{ title: "New Post", href: "/admin/new-post" }];
export const POST_LANGUAGES = ["Português", "English", "Français", "Deutsch"];
