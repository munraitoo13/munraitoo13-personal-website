import { getUserLocale } from "@/utils/userLocale";

export async function formatDate(date: Date) {
  // get the user's locale
  const locale = await getUserLocale();

  // format the date
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
