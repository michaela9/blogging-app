"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useIntl } from "react-intl";

import { AdminUrl, AppUrl } from "@/config/router";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";

import { AuthContext } from "@/provider/AuthProvider";

export default function Navbar() {
  const intl = useIntl();
  const router = useRouter();
  const { logout, isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="hidden md:block h-14 bg-light-gray">
      <div className="h-full flex w-full justify-between items-center max-w-6xl px-4 xl:px-0 mx-auto">
        <div className="flex gap-10 items-center">
          <CustomLink href={AppUrl.home}>
            <Image
              src="/logo.png"
              alt="Logo - cat"
              className=""
              width={39}
              height={44}
              priority
            />
          </CustomLink>
          <CustomLink href={AppUrl.home}>
            {intl.formatMessage({
              id: "containers.navbar.recentArticles",
              defaultMessage: "Recent articles",
            })}
          </CustomLink>
          <CustomLink href={AppUrl.about}>
            {intl.formatMessage({
              id: "containers.navbar.about",
              defaultMessage: "About",
            })}
          </CustomLink>
        </div>
        {!isLoggedIn && (
          <CustomLink href={AppUrl.login} style="secondary">
            <div className="flex gap-2 items-center">
              {intl.formatMessage({
                id: "containers.navbar.login",
                defaultMessage: "Log In",
              })}
              <ArrowRightIcon className="w-4" />
            </div>
          </CustomLink>
        )}
        {isLoggedIn && (
          <div className="flex gap-10 items-center">
            <CustomLink href={AdminUrl.home} style="secondary">
              {intl.formatMessage({
                id: "containers.navbar.myArticles",
                defaultMessage: "My Articles",
              })}
            </CustomLink>
            <CustomLink href={AdminUrl.createArticle} style="secondary">
              {intl.formatMessage({
                id: "containers.navbar.createArticle",
                defaultMessage: "Create Article",
              })}
            </CustomLink>
            <Button
              style="primary"
              onClick={() => {
                logout();
                router.push(AppUrl.home);
              }}
            >
              {intl.formatMessage({
                id: "containers.navbar.logout",
                defaultMessage: "Log Out",
              })}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
