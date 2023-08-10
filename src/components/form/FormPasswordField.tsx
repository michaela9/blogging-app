import type { ReactNode } from "react";
import type {
  Control,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
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
};
export default function FormPasswordField<T extends FieldValues>({
  name,
  label,
  control,
  register,
  error,
}: Props<T>) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <FormFieldWrapper>
      <Label name={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative">
            <div
              onClick={() => setVisiblePassword(!visiblePassword)}
              className="absolute inset-y-0 right-0 flex items-center px-2 hover:cursor-pointer"
            >
              {visiblePassword ? (
                <EyeSlashIcon className="h-6 w-6 text-nb-black" />
              ) : (
                <EyeIcon className="h-6 w-6 text-nb-black" />
              )}
            </div>
            <input
              id={name}
              type="password"
              className="rounded-md border-gray-300 w-full"
              {...field}
              {...register}
            />
          </div>
        )}
      />
      {error && <FormErrorMessage errorMessage={error.message} />}
    </FormFieldWrapper>
  );
}
