import type { ReactNode } from "react";
import type { FieldValues, UseFormRegister } from "react-hook-form";

import clsxm from "@/utils/clsxm";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  label: ReactNode;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errorMessage?: string;
};

const CheckboxField = ({
  name,
  label,
  register,
  errorMessage,
  ...rest
}: Props) => {
  return (
    <div className="flex items-center">
      <input
        id={name}
        type="checkbox"
        className={clsxm(
          "border-gray text-green focus:ring-green rounded-md border bg-white",
        )}
        {...register(name)}
        {...rest}
      />
      <label
        htmlFor={name}
        className={clsxm("cursor-pointer pl-2 text-nb-gray-text", {
          "text-red-500": errorMessage,
        })}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
