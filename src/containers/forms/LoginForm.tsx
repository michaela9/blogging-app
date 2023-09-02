"use client";

import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { useTranslations } from "next-intl";

import Button from "@/components/Button";
import { Input } from "@/components/form/input";
import PasswordInput from "@/components/form/PasswordInput";
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
  const t = useTranslations("LoginForm");

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-my-shadow border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {t("title")}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <Input
            type="text"
            name="username"
            label={t("username")}
            register={register}
            placeholder="novak"
            error={errors.username}
          />
          <PasswordInput
            name="password"
            register={register}
            error={errors.password}
          />
        </div>
        <Button style="primary" type="submit" disabled={isSubmitting}>
          {t("button")}
        </Button>
      </form>
    </div>
  );
}
