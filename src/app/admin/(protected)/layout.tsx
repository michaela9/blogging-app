"use client";

import { AuthContext } from "@/provider/AuthContext";
import type { Metadata } from "next";
import { useContext, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProtectedLayout({ children }: Props) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <p>You are not logged in, please login for admin part</p>;
  }

  return children;
}
