import "../styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";

import MobileNavbar from "@/containers/MobileNavbar";
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
      <IntlProvider locale={shortLocaleVerified} messages={messages}>
        <body className={inter.className}>
          <Navbar />
          <MobileNavbar />
          <main className="py-6 sm:py-12 px-4 xl:px-0 max-w-6xl mx-auto">
            {children}
          </main>
        </body>
      </IntlProvider>
    </html>
  );
}
