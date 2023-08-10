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

import clsxm from "@/utils/clsxm";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: ReactNode;
  control: Control<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  defaultValue?: PathValue<T, Path<T>>;
  placeholder?: string;
};
export default function FormCheckboxField<T extends FieldValues>({
  name,
  label,
  control,
  register,
  error,
}: Props<T>) {
  return (
    <div className="flex items-center">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type="checkbox"
            className={clsxm(
              "border-gray text-green focus:ring-green rounded-md border bg-white",
            )}
            {...field}
            {...register}
          />
        )}
      />
      <label
        htmlFor={name}
        className={clsxm("cursor-pointer pl-2 text-nb-gray-text", {
          "text-red-500": error && error.message,
        })}
      >
        {label}
      </label>
    </div>
  );
}
