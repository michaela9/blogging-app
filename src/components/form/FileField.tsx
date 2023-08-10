"use client";

import type { UseFormRegister } from "react-hook-form";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  errorMessage?: string;
};

export default function FileField({
  name,
  register,
  errorMessage,
  ...rest
}: Props) {
  return (
    <>
      <input
        id={name}
        type="file"
        accept="image/png, image/jpeg"
        {...(register ? register(name) : {})}
        {...rest}
      />

      {errorMessage && "sihsu"}
    </>
  );
}
