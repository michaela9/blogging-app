"use client";

import type { ClassValue } from "clsx";
import type { UseFormRegister } from "react-hook-form";

import clsxm from "@/utils/clsxm";

type Props = Omit<JSX.IntrinsicElements["textarea"], "className"> & {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  errorMessage?: string;
  className?: ClassValue;
};

export default function TextAreaField({
  name,
  register,
  className,
  errorMessage,
  ...rest
}: Props) {
  return (
    <>
      <textarea
        id={name}
        className={clsxm(className, "rounded-md border-gray-300 w-full")}
        {...(register ? register(name) : {})}
        {...rest}
      />

      {errorMessage && "sihsu"}
    </>
  );
}
