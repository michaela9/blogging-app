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
  control: Control<T>;
  register: UseFormRegister<T>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
};
export default function FormFileField<T extends FieldValues>({
  name,
  label,
  control,
  register,
  error,
}: Props<T>) {
  return (
    <FormFieldWrapper>
      <Label name={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type="file"
            accept="image/png, image/jpeg"
            {...field}
            {...register}
          />
        )}
      />
      {error && <FormErrorMessage errorMessage={error.message} />}
    </FormFieldWrapper>
  );
}
