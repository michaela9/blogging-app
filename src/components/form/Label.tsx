"use client";

import type { ReactNode } from "react";

type Props = Omit<JSX.IntrinsicElements["label"], "className"> & {
  name: string;
  children: ReactNode;
};

export default function Label({ name, children, ...rest }: Props) {
  return (
    <label
      htmlFor={name}
      className="text-sm md:text-base flex flex-col gap-2"
      {...rest}
    >
      {children}
    </label>
  );
}
