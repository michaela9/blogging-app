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
};
export default function FormTextField<T extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  placeholder,
  register,
  error,
}: Props<T>) {
  return (
    <FormFieldWrapper>
      <Label name={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            id={name}
            type="text"
            placeholder={placeholder}
            className="rounded-md border-gray-300 w-full"
            {...field}
            {...register}
          />
          //   <TextField  placeholder={placeholder} register={register} />
        )}
      />
      {error && <FormErrorMessage errorMessage={error.message} />}
    </FormFieldWrapper>
  );
}
