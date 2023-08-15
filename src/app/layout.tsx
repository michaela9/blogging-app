import "@/styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import React from "react";

import { Locale } from "@/config/intl";

import AllProvider from "@/components/AllProvider";

export const metadata: Metadata = {
  icons: {
    icon: "/logo.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const locale = Locale.EN;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AllProvider>{children}</AllProvider>
      </body>
    </html>
  );
}
