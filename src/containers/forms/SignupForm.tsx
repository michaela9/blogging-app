"use client";

import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { useTranslations } from "next-intl";

import Button from "@/components/Button";
import { Input } from "@/components/form/input";
import PasswordInput from "@/components/form/PasswordInput";
import Heading from "@/components/Heading";

import type { CreateUserSchemaT } from "@/schema/zodSchema";

type Props = {
  onSubmit: UseFormHandleSubmit<CreateUserSchemaT>;
  register: UseFormRegister<CreateUserSchemaT>;
  errors: FieldErrors<CreateUserSchemaT>;
  isSubmitting: boolean;
};

export default function SignupForm({
  onSubmit,
  register,
  errors,
  isSubmitting,
}: Props) {
  const t = useTranslations("SignupForm");

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-my-shadow border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {t("title")}
      </Heading>
      <form
        onSubmit={() => onSubmit}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            label={t("name")}
            register={register}
            error={errors.name}
            placeholder="Jan Novák"
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
