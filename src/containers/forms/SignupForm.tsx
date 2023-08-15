"use client";

import type {
  Control,
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";

import { useIntl } from "react-intl";

import Button from "@/components/Button";
import FormPasswordField from "@/components/form/FormPasswordField";
import FormTextField from "@/components/form/FormTextField";
import Heading from "@/components/Heading";

import type { CreateUserSchemaT } from "@/schema/zodSchema";

type Props = {
  onSubmit: UseFormHandleSubmit<CreateUserSchemaT>;
  register: UseFormRegister<CreateUserSchemaT>;
  errors: FieldErrors<CreateUserSchemaT>;
  control: Control<CreateUserSchemaT>;
};

export default function SignupForm({
  onSubmit,
  register,
  errors,
  control,
}: Props) {
  const intl = useIntl();

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
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
          <FormTextField
            name="name"
            label={intl.formatMessage({
              id: "containers.signupForm.name",
              defaultMessage: "Name",
            })}
            control={control}
            placeholder="Jan Novák"
            register={register}
            error={errors.name}
          />
          <FormPasswordField
            name="password"
            label={intl.formatMessage({
              id: "containers.login.password",
              defaultMessage: "Password",
            })}
            control={control}
            register={register}
            error={errors.password}
          />
        </div>
        <Button style="primary" type="submit">
          {intl.formatMessage({
            id: "containers.signupForm.submitButton",
            defaultMessage: "Sign Up",
          })}
        </Button>
      </form>
    </div>
  );
}
