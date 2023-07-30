"use client";

import type { ReactNode } from "react";

import Navbar from "@/containers/Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="py-16 max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
