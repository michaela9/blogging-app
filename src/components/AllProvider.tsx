"use client";

import type { ReactNode } from "react";

import React, { useMemo } from "react";
import { IntlProvider } from "react-intl";

import { Locale } from "@/config/intl";

import { AuthProvider } from "@/context/auth.context";
import { getMessagesByLocale, verifyLocale } from "@/service/intl";

type Props = {
  children: ReactNode;
};

export default function AllProvider({ children }: Props) {
  const locale = Locale.EN;
  const shortLocaleVerified = verifyLocale(locale);

  const messages = useMemo(() => {
    return getMessagesByLocale(shortLocaleVerified);
  }, [shortLocaleVerified]);

  return (
    <IntlProvider locale={shortLocaleVerified} messages={messages}>
      <AuthProvider>{children}</AuthProvider>
    </IntlProvider>
  );
}
