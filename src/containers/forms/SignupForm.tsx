"use client";

import {
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import PasswordField from "@/components/form/PasswordField";
import TextField from "@/components/form/TextField";
import Heading from "@/components/Heading";

import type { CreateUserSchemaT } from "@/schema/zodSchema";

type Props = {
  onSubmit: UseFormHandleSubmit<CreateUserSchemaT>;
  register: UseFormRegister<CreateUserSchemaT>;
  errors: FieldErrors<CreateUserSchemaT>;
};

export default function SignupForm({ onSubmit, register, errors }: Props) {
  const intl = useIntl();

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {intl.formatMessage({
          id: "containers.signup.title",
          defaultMessage: "Sign Up",
        })}
      </Heading>
      <form
        onSubmit={() => onSubmit}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <FormFieldWrapper>
            <Label name="name">
              {intl.formatMessage({
                id: "containers.signup.name",
                defaultMessage: "Name",
              })}
            </Label>
            <TextField
              name="name"
              placeholder="Jan Novák"
              register={register}
              errorMessage={errors?.name?.message}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label name="password">
              {intl.formatMessage({
                id: "containers.signup.password",
                defaultMessage: "Password",
              })}
            </Label>
            <PasswordField
              name="password"
              register={register}
              errorMessage={errors?.password?.message}
            />
          </FormFieldWrapper>
        </div>
        <Button style="primary" type="submit">
          {intl.formatMessage({
            id: "containers.signup.submitButton",
            defaultMessage: "Sign Up",
          })}
        </Button>
      </form>
    </div>
  );
}
