import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import FormErrorMessage from "./FormErrorMessage";
import FormFieldWrapper from "./FormFieldWrapper";
import Label from "./Label";

type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  name: Path<T>;
};

export default function PasswordInput<T extends FieldValues>({
  register,
  error,
  name,
}: Props<T>) {
  const t = useTranslations("PasswordInput");

  const [visiblePassword, setVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <FormFieldWrapper>
      <Label name={name}>{t("password")}</Label>
      <div className="relative">
        <input
          className="rounded-md border-gray-300 w-full"
          id={name}
          placeholder="Password"
          type="password"
          {...register(name)}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute bottom-2 right-0 pr-3 flex items-center"
        >
          {visiblePassword ? (
            <EyeSlashIcon className="h-6 w-6 text-gray-400" />
          ) : (
            <EyeIcon className="h-6 w-6 text-gray-400" />
          )}
        </button>
      </div>

      {error && <FormErrorMessage errorMessage={error.message} />}
    </FormFieldWrapper>
  );
}
