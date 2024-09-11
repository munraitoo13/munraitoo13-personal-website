"use server";

import { cookies } from "next/headers";
import { defaultLocale } from "@/i18n";

export async function getUserLocale() {
  return cookies().get("locale")?.value || defaultLocale;
}

export async function setUserLocale(locale: string) {
  cookies().set("locale", locale);
}
