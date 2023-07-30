"use client";

import Navbar from "@/containers/Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div className="py-16 max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
