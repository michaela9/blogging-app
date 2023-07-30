export type LocaleT = (typeof Locale)[keyof typeof Locale];

export const Locale = {
  CS: "cs",
  EN: "en",
} as const;

export const locales: LocaleT[] = Object.values(Locale);

export const defaultLocale = Locale.CS;
