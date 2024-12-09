"use server";

import { defaultLocale } from "@/i18n/config";
import { cookies } from "next/headers";

export async function getUserLocale() {
  // get the user's locale from the cookies
  return cookies().get("locale")?.value || defaultLocale;
}

export async function setUserLocale(locale: string) {
  // set the user's locale in the cookies
  cookies().set("locale", locale);
}
