"use client";

import { type ReactNode, useContext } from "react";

import { AuthContext } from "@/provider/AuthProvider";

type Props = {
  children: ReactNode;
};

export default function ProtectedLayout({ children }: Props) {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <p>You are not logged in, please login for admin part</p>;
  }

  return children;
}
