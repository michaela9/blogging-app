import type { ReactNode } from "react";
import type {
  Control,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  Path,
  UseFormRegister,
} from "react-hook-form";

import React from "react";
import { Controller } from "react-hook-form";

import FormErrorMessage from "./FormErrorMessage";
import FormFieldWrapper from "./FormFieldWrapper";
import Label from "./Label";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: ReactNode;
  register: UseFormRegister<T>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
};
export default function FormFileField<T extends FieldValues>({
  name,
  label,
  register,
  error,
}: Props<T>) {
  return (
    <FormFieldWrapper>
      <Label name={name}>{label}</Label>
      <input id={name} type="file" {...register(name)} />
      {error && <FormErrorMessage errorMessage={error.message} />}
    </FormFieldWrapper>
  );
}
