"use server";

import { defaultLocale } from "@/i18n/config";
import { cookies } from "next/headers";

export async function getUserLocale() {
  return cookies().get("locale")?.value || defaultLocale;
}

export async function setUserLocale(locale: string) {
  cookies().set({
    name: "locale",
    value: locale,
    path: "/",
  });
}
