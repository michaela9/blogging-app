import type { LocaleT } from "@/config/intl";
import { defaultLocale, Locale, locales } from "@/config/intl";

export const verifyLocale = (locale: string): LocaleT => {
  switch (locale) {
    case Locale.EN:
      return Locale.EN;
    default:
      return Locale.CS;
  }
};

export const getMessagesByLocale = (
  locale: LocaleT,
): Record<string, string> => {
  switch (locale) {
    case Locale.CS:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return require(`@/content/locales-compiled/cs.json`);
    case Locale.EN:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return require(`@/content/locales-compiled/en.json`);
    default:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return require(`@/content/locales-compiled/cs.json`);
  }
};

export const getMessages = (locales: LocaleT[]) =>
  locales.reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: getMessagesByLocale(lang),
    }),
    {},
  );

export const getFormats = () => {
  return {};
};

export const createConfig = () => {
  return {
    defaultLocale: defaultLocale,
    locales: locales,
    messages: getMessages(locales),
    formats: getFormats(),
  };
};
