import type { ReactNode } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
} from "react-hook-form";

import React from "react";

import FormErrorMessage from "./FormErrorMessage";
import FormFieldWrapper from "./FormFieldWrapper";
import Label from "./Label";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: ReactNode;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  defaultValue?: PathValue<T, Path<T>>;
  placeholder?: string;
  rows?: number;
};

export default function TextArea<T extends FieldValues>({
  name,
  label,
  defaultValue,
  placeholder,
  register,
  error,
  rows = 10,
}: Props<T>) {
  return (
    <FormFieldWrapper>
      <Label name={name}>{label}</Label>
      <textarea
        className="rounded-md border-gray-300 w-full"
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        cols={50}
        rows={rows}
        {...register(name)}
      />
      {error && <FormErrorMessage errorMessage={error.message} />}
    </FormFieldWrapper>
  );
}
