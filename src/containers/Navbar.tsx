"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";

import { AppUrl } from "@/config/router";

import useNavbarLinks from "@/hooks/useNavbarLinks";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import Logo from "@/components/Logo";

import { AuthContext } from "@/context/auth.context";

export default function Navbar() {
  const t = useTranslations("Navbar");

  const router = useRouter();
  const { logout, isLoggedIn } = useContext(AuthContext);
  const { baseLinks, loggedInLinks } = useNavbarLinks();
  const pathname = usePathname();

  return (
    <nav className="hidden md:block h-14 bg-light-gray">
      <div className="h-full flex w-full justify-between items-center max-w-6xl px-4 xl:px-0 mx-auto">
        <div className="flex gap-10 items-center">
          <Logo width={39} height={44} />
          {baseLinks.map((link) => {
            return (
              <CustomLink
                key={link.id}
                href={link.href}
                style="tertiary"
                active={pathname === link.href}
              >
                {link.label}
              </CustomLink>
            );
          })}
        </div>
        {!isLoggedIn && (
          <CustomLink href={AppUrl.login} style="secondary">
            <div className="flex gap-2 items-center">
              {t("login")}
              <ArrowRightIcon className="w-4" />
            </div>
          </CustomLink>
        )}
        {isLoggedIn && (
          <div className="flex gap-10 items-center">
            {loggedInLinks.map((link) => (
              <CustomLink
                key={link.id}
                href={link.href}
                active={pathname === link.href}
              >
                {link.label}
              </CustomLink>
            ))}
            <Button
              style="primary"
              onClick={() => {
                logout();
                router.push(AppUrl.home);
              }}
            >
              {t("logout")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
