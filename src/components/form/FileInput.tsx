import type { ReactNode } from "react";
import type {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Path,
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
  error?: FieldError | FieldErrorsImpl<T>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function FormFileField<T extends FieldValues>({
  name,
  label,
  register,
  error,
  onChange,
}: Props<T>) {
  return (
    <FormFieldWrapper>
      <Label name={name}>{label}</Label>

      <input
        id={name}
        type="file"
        {...register(name)}
        onChange={onChange}
        className=" file:bg-middle-gray file:text-white file:mr-4 file:border-0 file:px-4 file:py-2 file:rounded-md"
      />
      {error && <FormErrorMessage errorMessage={error.message as string} />}
    </FormFieldWrapper>
  );
}
