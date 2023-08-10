"use client";

import type { UseFormRegister } from "react-hook-form";

import FormErrorMessage from "./FormErrorMessage";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  errorMessage?: string;
};

export default function TextField({
  name,
  register,
  errorMessage,
  ...rest
}: Props) {
  return (
    <>
      <input
        id={name}
        type="text"
        className="rounded-md border-gray-300 w-full"
        {...(register ? register(name) : {})}
        {...rest}
      />

      {errorMessage && (
        <FormErrorMessage errorMessage={errorMessage} style="login" />
      )}
    </>
  );
}
