import { useState, useEffect, useTransition } from "react";
import { getUserLocale, setUserLocale } from "@/utils/userLocale";

export function useLocale() {
  const [locale, setLocale] = useState<string>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getUserLocale().then(setLocale);
  }, []);

  const updateLocale = (newLocale: string) => {
    startTransition(() => {
      setUserLocale(newLocale);
      setLocale(newLocale);
    });
  };

  return { locale, updateLocale, isPending };
}
