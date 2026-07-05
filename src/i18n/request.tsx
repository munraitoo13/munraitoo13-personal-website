import { Locale } from "@/i18n/config";
import { getRequestConfig } from "next-intl/server";
import deDE from "../../messages/de-DE.json";
import enUS from "../../messages/en-US.json";
import frFR from "../../messages/fr-FR.json";
import ptBR from "../../messages/pt-BR.json";
import { getUserLocale } from "@/utils/userLocale";

const messages = {
  "de-DE": deDE,
  "en-US": enUS,
  "fr-FR": frFR,
  "pt-BR": ptBR,
} satisfies Record<Locale, typeof enUS>;

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: messages[locale],
  };
});
