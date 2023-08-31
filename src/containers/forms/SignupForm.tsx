"use client";

import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { useIntl } from "react-intl";

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
  const intl = useIntl();

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-my-shadow border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {intl.formatMessage({
          id: "containers.signupForm.title",
          defaultMessage: "Sign Up",
        })}
      </Heading>
      <form
        onSubmit={() => onSubmit}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            label={intl.formatMessage({
              id: "containers.signupForm.name",
              defaultMessage: "Name",
            })}
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
          {intl.formatMessage({
            id: "containers.signupForm.submitButton",
            defaultMessage: "Sign Up",
          })}
        </Button>
      </form>
    </div>
  );
}
