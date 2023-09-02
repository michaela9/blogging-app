import "@/styles/globals.css";

import type { ReactNode } from "react";

import { NextIntlClientProvider, useMessages } from "next-intl";
import React from "react";

import { defaultLocale } from "@/config/intl";

import RootLayoutComponent from "@/components/RootLayoutComponent";

export const metadata = {
  title: "Blogging App",
  description: "Make a new post with our app.",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const messages = useMessages();

  return (
    <html lang={defaultLocale}>
      <NextIntlClientProvider locale={defaultLocale} messages={messages}>
        <RootLayoutComponent>{children}</RootLayoutComponent>
      </NextIntlClientProvider>
    </html>
  );
}
