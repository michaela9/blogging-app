"use client";

import React from "react";
import { useIntl } from "react-intl";

import CustomLink from "@/components/CustomLink";
import Heading from "@/components/Heading";

const Login = () => {
  const intl = useIntl();
  return (
    <div>
      <div className="space-y-6 px-6 py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
        <Heading headingLevel="h1" size="s2">
          {intl.formatMessage({
            id: "containers.login.heading",
            defaultMessage: "Log In",
          })}
        </Heading>
        <form className="space-y-8 flex flex-col justify-end items-end">
          <div className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <label>
                {intl.formatMessage({
                  id: "containers.login.email",
                  defaultMessage: "Email",
                })}
              </label>
              <input
                className="rounded-md border-gray-300"
                placeholder="jmeno@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>
                {intl.formatMessage({
                  id: "containers.login.password",
                  defaultMessage: "Password",
                })}
              </label>
              <input
                className="rounded-md border-gray-300"
                placeholder="*******"
              />
            </div>
          </div>
          <CustomLink href="/login" style="primary">
            {intl.formatMessage({
              id: "containers.login.button",
              defaultMessage: "Log In",
            })}
          </CustomLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
