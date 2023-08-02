"use client";

import "../styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";

import Navbar from "@/containers/Navbar";

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
  children: ReactNode;
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
          <main className="px-4 xl:px-0 max-w-6xl mx-auto">
            <Navbar />
            <div className="py-6 sm:py-12">{children}</div>
          </main>
        </IntlProvider>
      </body>
    </html>
  );
}
