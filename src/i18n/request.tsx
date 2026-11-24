import { Locale } from "@/i18n/config";
import { getRequestConfig } from "next-intl/server";
import enUS from "../../messages/en-US.json";
import ptBR from "../../messages/pt-BR.json";
import { getUserLocale } from "@/utils/userLocale";

const messages = {
  "en-US": enUS,
  "pt-BR": ptBR,
} satisfies Record<Locale, typeof enUS>;

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: messages[locale],
  };
});
