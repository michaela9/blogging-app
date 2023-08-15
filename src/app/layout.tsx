"use client";

import "../styles/globals.css";

import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import React, { useMemo } from "react";
import { IntlProvider } from "react-intl";

import { Locale } from "@/config/intl";

import MobileNavbar from "@/containers/MobileNavbar";
import Navbar from "@/containers/Navbar";

import { AuthProvider } from "@/provider/AuthProvider";
import { getMessagesByLocale, verifyLocale } from "@/service/intl";

const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   icons: {
//     icon: "/logo.ico",
//   },
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 1,
//   },
// };

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const locale = Locale.EN;
  const shortLocaleVerified = verifyLocale(locale);

  const messages = useMemo(() => {
    return getMessagesByLocale(shortLocaleVerified);
  }, [shortLocaleVerified]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <IntlProvider locale={shortLocaleVerified} messages={messages}>
            <div>
              <Navbar />
              <MobileNavbar />
              <main className="py-6 sm:py-12 px-4 xl:px-0 max-w-6xl mx-auto">
                {children}
              </main>
            </div>
          </IntlProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
