"use client";

import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import React from "react";

import MobileNavbar from "@/containers/MobileNavbar";
import Navbar from "@/containers/Navbar";

import { AuthProvider } from "@/context/auth.context";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export default function RootLayoutComponent({ children }: Props) {
  return (
    <AuthProvider>
      <body className={inter.className}>
        <Navbar />
        <MobileNavbar />
        <main className="py-6 sm:py-12 px-4 xl:px-0 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </AuthProvider>
  );
}
