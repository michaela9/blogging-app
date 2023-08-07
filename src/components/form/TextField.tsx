"use client";

import type { FieldValues, UseFormRegister } from "react-hook-form";

import FormErrorMessage from "./FormErrorMessage";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  register?: UseFormRegister<FieldValues>;
  errorMessage?: string;
};

const TextField = ({ name, register, errorMessage, ...rest }: Props) => {
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
};

export default TextField;
