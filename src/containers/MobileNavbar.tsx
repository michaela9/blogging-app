"use client";

import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useContext } from "react";
import { useIntl } from "react-intl";

import { AdminUrl, AppUrl } from "@/config/router";

import clsxm from "@/utils/clsxm";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";

import { AuthContext } from "@/provider/AuthProvider";

export default function MobileNavbar() {
  const intl = useIntl();
  const router = useRouter();

  const { logout, isLoggedIn } = useContext(AuthContext);

  return (
    <Popover
      as="nav"
      className={({ open }) =>
        clsxm("bg-light-gray md:hidden w-full", {
          "": open,
          "h-14": !open,
        })
      }
    >
      {({ open }) => (
        <>
          <div>
            <CustomLink href={AppUrl.home} className="absolute top-2 left-4">
              <Image
                src="/logo.png"
                alt="Logo - cat"
                className=""
                width={32}
                height={32}
                priority
              />
            </CustomLink>
            <Popover.Button className={clsxm("absolute top-4 right-4")}>
              {!open ? (
                <>
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </>
              ) : (
                <>
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                </>
              )}
            </Popover.Button>
          </div>

          <Popover.Panel
            as="div"
            className="relative top-14 w-full bg-white shadow-xl mb-6"
          >
            <div className="px-4 py-8 flex flex-col items-start gap-5">
              <>
                {isLoggedIn ? (
                  <>
                    <Popover.Button
                      as={Button}
                      onClick={() => {
                        logout();
                        router.push(AppUrl.home);
                      }}
                      style="primary"
                    >
                      {intl.formatMessage({
                        id: "containers.navbar.logout",
                        defaultMessage: "Log Out",
                      })}
                    </Popover.Button>
                    <Popover.Button as={CustomLink} href={AdminUrl.home}>
                      {intl.formatMessage({
                        id: "containers.navbar.myArticles",
                        defaultMessage: "My Articles",
                      })}
                    </Popover.Button>
                    <Popover.Button
                      as={CustomLink}
                      href={AdminUrl.createArticle}
                    >
                      {intl.formatMessage({
                        id: "containers.navbar.createArticle",
                        defaultMessage: "Create Article",
                      })}
                    </Popover.Button>
                  </>
                ) : (
                  <Popover.Button
                    as={CustomLink}
                    href={AppUrl.login}
                    style="primary"
                  >
                    {intl.formatMessage({
                      id: "containers.navbar.login",
                      defaultMessage: "Log In",
                    })}
                  </Popover.Button>
                )}
              </>
              <Popover.Button
                as={CustomLink}
                href={AppUrl.home}
                style="secondary"
              >
                {intl.formatMessage({
                  id: "containers.navbar.recentArticles",
                  defaultMessage: "Recent articles",
                })}
              </Popover.Button>
              <Popover.Button
                as={CustomLink}
                href={AppUrl.about}
                style="secondary"
              >
                {intl.formatMessage({
                  id: "containers.navbar.about",
                  defaultMessage: "About",
                })}
              </Popover.Button>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
