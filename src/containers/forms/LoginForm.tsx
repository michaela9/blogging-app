"use client";

import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import { Input } from "@/components/form/input";
import Heading from "@/components/Heading";

import type { UserSchemaT } from "@/schema/zodSchema";

type Props = {
  onSubmit: SubmitHandler<UserSchemaT>;
  handleSubmit: UseFormHandleSubmit<UserSchemaT>;
  register: UseFormRegister<UserSchemaT>;
  errors: FieldErrors<UserSchemaT>;
  isSubmitting: boolean;
};

export default function LoginForm({
  onSubmit,
  handleSubmit,
  register,
  isSubmitting,
  errors,
}: Props) {
  const intl = useIntl();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-my-shadow border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {intl.formatMessage({
          id: "containers.loginForm.title",
          defaultMessage: "Log In",
        })}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <Input
            type="text"
            name="username"
            label={intl.formatMessage({
              id: "containers.loginForm.username",
              defaultMessage: "Username",
            })}
            register={register}
            error={errors.username}
            placeholder="novak"
          />
          <div className="relative">
            <Input
              type={visiblePassword ? "text" : "password"}
              name="password"
              label={intl.formatMessage({
                id: "containers.loginForm.password",
                defaultMessage: "Password",
              })}
              placeholder="Password"
              error={errors.password}
              register={register}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute bottom-2 right-0 pr-3 flex items-center"
            >
              {visiblePassword ? (
                <EyeSlashIcon className="h-6 w-6 text-gray-400" />
              ) : (
                <EyeIcon className="h-6 w-6 text-gray-400" />
              )}
            </button>
          </div>
        </div>
        <Button style="primary" type="submit" disabled={isSubmitting}>
          {intl.formatMessage({
            id: "containers.loginForm.submitButton",
            defaultMessage: "Log In",
          })}
        </Button>
      </form>
    </div>
  );
}
