import "@/styles/globals.css";

import type { ReactNode } from "react";

import React from "react";

import RootLayoutComponent from "@/components/RootLayoutComponent";

export const metadata = {
  title: "Blogging App",
  description: "Make a new post with our app.",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <RootLayoutComponent>{children}</RootLayoutComponent>;
}
