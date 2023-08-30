import type { ReactNode } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import FormErrorMessage from "./FormErrorMessage";
import FormFieldWrapper from "./FormFieldWrapper";
import Label from "./Label";

type CustomTimeError = {
  type: string;
  message: string;
} | null;

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: ReactNode;
  register: UseFormRegister<T>;
  error: FieldError | undefined | CustomTimeError;
  placeholder?: string;
  type: "text" | "date" | "time" | "email" | "number" | "password";
  defaultValue?: string;
};

export function Input<T extends FieldValues>({
  name,
  label,
  register,
  error,
  placeholder,
  type,
  defaultValue,
}: Props<T>) {
  return (
    <FormFieldWrapper>
      <Label name={name}>{label}</Label>
      <input
        className="rounded-md border-gray-300 w-full"
        id={name}
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        {...register(name)}
      />

      {error && <FormErrorMessage errorMessage={error.message} />}
    </FormFieldWrapper>
  );
}
