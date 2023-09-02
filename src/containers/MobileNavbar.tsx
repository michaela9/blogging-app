"use client";

import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";

import { AppUrl } from "@/config/router";

import useNavbarLinks from "@/hooks/useNavbarLinks";
import clsxm from "@/utils/clsxm";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import Logo from "@/components/Logo";

import { AuthContext } from "@/context/auth.context";

export default function MobileNavbar() {
  const t = useTranslations("Navbar");

  const router = useRouter();

  const { logout, isLoggedIn } = useContext(AuthContext);
  const { baseLinks, loggedInLinks } = useNavbarLinks();
  const pathname = usePathname();

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
            <Logo width={32} height={32} className="absolute top-2 left-4" />
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
                      {" "}
                      {t("logout")}
                    </Popover.Button>
                    {loggedInLinks.map((link) => (
                      <Popover.Button
                        key={link.id}
                        as={CustomLink}
                        href={link.href}
                        active={pathname === link.href}
                      >
                        {link.label}
                      </Popover.Button>
                    ))}
                  </>
                ) : (
                  <Popover.Button
                    as={CustomLink}
                    href={AppUrl.login}
                    style="primary"
                  >
                    {" "}
                    {t("login")}
                  </Popover.Button>
                )}
              </>
              {baseLinks.map((link) => (
                <Popover.Button
                  key={link.id}
                  as={CustomLink}
                  href={link.href}
                  active={pathname === link.href}
                >
                  {link.label}
                </Popover.Button>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
