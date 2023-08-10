import type { ReactNode } from "react";
import type {
  Control,
  FieldError,
  FieldValues,
  Path,
  PathValue,
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
  error: FieldError | undefined;
  defaultValue?: PathValue<T, Path<T>>;
  placeholder?: string;
  rows?: number;
};
export default function FormTextAreaField<T extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  placeholder,
  register,
  error,
  rows = 10,
}: Props<T>) {
  return (
    <FormFieldWrapper>
      <Label name={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <textarea
            rows={rows}
            cols={50}
            placeholder={placeholder}
            className="w-full border-gray-300 rounded-md"
            {...field}
            {...register}
          />
        )}
      />
      {error && <FormErrorMessage errorMessage={error.message} />}
    </FormFieldWrapper>
  );
}
