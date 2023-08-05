import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { useIntl } from "react-intl";

import { AppUrl } from "@/config/router";

import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import clsxm from "@/utils/clsxm";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";

const MobileNavbar = () => {
  const intl = useIntl();
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

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
                  <Button
                    onClick={() => {
                      localStorage.setItem("accessToken", "");
                      router.push(AppUrl.home);
                    }}
                    style="primary"
                  >
                    {intl.formatMessage({
                      id: "containers.navbar.logout",
                      defaultMessage: "Log Out",
                    })}
                  </Button>
                ) : (
                  <CustomLink href={AppUrl.login} style="primary">
                    {intl.formatMessage({
                      id: "containers.navbar.login",
                      defaultMessage: "Log In",
                    })}
                  </CustomLink>
                )}
              </>
              <CustomLink href={AppUrl.home} style="secondary">
                {intl.formatMessage({
                  id: "containers.navbar.recentArticles",
                  defaultMessage: "Recent articles",
                })}
              </CustomLink>
              <CustomLink href={AppUrl.about} style="secondary">
                {intl.formatMessage({
                  id: "containers.navbar.about",
                  defaultMessage: "About",
                })}
              </CustomLink>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default MobileNavbar;
