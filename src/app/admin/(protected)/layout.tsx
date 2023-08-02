"use client";

import { useEffect, type ReactNode } from "react";

import Navbar from "@/containers/Navbar";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import { useRouter } from "next/navigation";
import { AppUrl } from "@/config/router";

type Props = {
  children: ReactNode;
};

export default function AdminProtectedLayout({ children }: Props) {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  console.log(isLoggedIn);

  // if (!isLoggedIn) {
  //   router.push(AppUrl.home);
  // }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
