"use client";

import type {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { useIntl } from "react-intl";

import Button from "@/components/Button";
import FormPasswordField from "@/components/form/FormPasswordField";
import FormTextField from "@/components/form/FormTextField";
import Heading from "@/components/Heading";

import type { UserSchemaT } from "@/schema/zodSchema";

type Props = {
  onSubmit: SubmitHandler<UserSchemaT>;
  handleSubmit: UseFormHandleSubmit<UserSchemaT>;
  register: UseFormRegister<UserSchemaT>;
  errors: FieldErrors<UserSchemaT>;
  control: Control<UserSchemaT>;
};

export default function LoginForm({
  onSubmit,
  handleSubmit,
  register,
  errors,
  control,
}: Props) {
  const intl = useIntl();

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {intl.formatMessage({
          id: "containers.login.title",
          defaultMessage: "Log In",
        })}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <FormTextField
            name="username"
            label={intl.formatMessage({
              id: "containers.login.username",
              defaultMessage: "Username",
            })}
            control={control}
            placeholder="Article Title"
            register={register}
            error={errors.username}
          />
          <FormPasswordField
            name="password"
            label={intl.formatMessage({
              id: "containers.login.password",
              defaultMessage: "Password",
            })}
            control={control}
            register={register}
            error={errors.username}
          />
        </div>
        <Button style="primary" type="submit">
          {intl.formatMessage({
            id: "containers.login.submitButton",
            defaultMessage: "Log In",
          })}
        </Button>
      </form>
    </div>
  );
}
