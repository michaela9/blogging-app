"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useIntl } from "react-intl";

import useIsLoggedIn from "@/hooks/useIsLoggedIn";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";

const Navbar = () => {
  const intl = useIntl();
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();
  return (
    <nav className="hidden md:block h-14 bg-light-gray">
      <div className="h-full flex w-full justify-between items-center max-w-6xl px-4 xl:px-0 mx-auto">
        <div className="flex gap-10 items-center">
          <CustomLink href="/">
            <Image
              src="/logo.png"
              alt="Logo - cat"
              className=""
              width={39}
              height={44}
              priority
            />
          </CustomLink>
          <CustomLink href="/">
            {intl.formatMessage({
              id: "containers.navbar.recentArticles",
              defaultMessage: "Recent articles",
            })}
          </CustomLink>
          <CustomLink href="/about">
            {intl.formatMessage({
              id: "containers.navbar.about",
              defaultMessage: "About",
            })}
          </CustomLink>
        </div>
        {!isLoggedIn && (
          <CustomLink href="/login" style="secondary">
            <div className="flex gap-2 items-center">
              {intl.formatMessage({
                id: "containers.navbar.login",
                defaultMessage: "Log In",
              })}
              <ArrowRightIcon className="w-4" />
            </div>
          </CustomLink>
        )}
        {!isLoggedIn && (
          <Button
            style="primary"
            onClick={() => {
              localStorage.setItem("accessToken", "");
              router.push("/");
            }}
          >
            {intl.formatMessage({
              id: "containers.navbar.logout",
              defaultMessage: "Log Out",
            })}
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
