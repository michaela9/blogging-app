import "@/styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import React from "react";

import RootLayoutComponent from "@/components/RootLayoutComponent";

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

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
