"use client";

import type { ClassValue } from "clsx";

import clsxm from "@/utils/clsxm";

import type { TRowProps } from "@/components/table/TRow";

export type TBodyProps = Omit<
  JSX.IntrinsicElements["tbody"],
  "className" | "children"
> & {
  children: React.ReactElement<TRowProps>[] | React.ReactElement;
  className?: ClassValue;
};

export default function TBody({ children, className, ...rest }: TBodyProps) {
  return (
    <tbody className={clsxm(className)} {...rest}>
      {children}
    </tbody>
  );
}
