export function formatDate(date: Date, locale: string = "en-US") {
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
