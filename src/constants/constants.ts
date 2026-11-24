import type { Locale } from "@/i18n/config";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export const RESUME_URL =
  "https://drive.google.com/file/d/1krSImDXFQfqe6gMo8QRtCltPD-eZ8z1P/view?usp=sharing";

export const CONTACT_EMAIL = "munraitoo13@gmail.com";

export const LANGUAGES: {
  locale: Locale;
  shortLabel: string;
  title: string;
}[] = [
  { locale: "en-US", shortLabel: "EN", title: "English" },
  { locale: "pt-BR", shortLabel: "PT", title: "Português" },
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
