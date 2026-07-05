"use server";

import {
  Locale,
  localeCookieName,
  resolveLocale,
} from "@/i18n/config";
import { cookies } from "next/headers";

export async function getUserLocale() {
  return resolveLocale(cookies().get(localeCookieName)?.value);
}

export async function setUserLocale(locale: Locale) {
  cookies().set({
    name: localeCookieName,
    value: resolveLocale(locale),
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
}
