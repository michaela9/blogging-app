"use client";

import "../styles/globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";

import { getMessagesByLocale, verifyLocale } from "@/service/intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const locale = "en";
  const shortLocaleVerified = verifyLocale(locale);

  const messages = useMemo(() => {
    return getMessagesByLocale(shortLocaleVerified);
  }, [shortLocaleVerified]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <IntlProvider locale={shortLocaleVerified} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
