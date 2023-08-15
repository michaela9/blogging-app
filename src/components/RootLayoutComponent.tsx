"use client";

import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import React, { useMemo } from "react";
import { IntlProvider } from "react-intl";

import { Locale } from "@/config/intl";

import MobileNavbar from "@/containers/MobileNavbar";
import Navbar from "@/containers/Navbar";

import { AuthProvider } from "@/context/auth.context";
import { getMessagesByLocale, verifyLocale } from "@/service/intl";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export default function RootLayoutComponent({ children }: Props) {
  const locale = Locale.EN;
  const shortLocaleVerified = verifyLocale(locale);

  const messages = useMemo(() => {
    return getMessagesByLocale(shortLocaleVerified);
  }, [shortLocaleVerified]);

  return (
    <html lang="en">
      <AuthProvider>
        <IntlProvider locale={shortLocaleVerified} messages={messages}>
          <body className={inter.className}>
            <Navbar />
            <MobileNavbar />
            <main className="py-6 sm:py-12 px-4 xl:px-0 max-w-6xl mx-auto">
              {children}
            </main>
          </body>
        </IntlProvider>
      </AuthProvider>
    </html>
  );
}
