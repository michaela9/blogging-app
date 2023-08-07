"use client"

import type { ClassValue } from "clsx";

import clsxm from "@/utils/clsxm";

import type { TRowProps } from "@/components/table/TRow";

export type THeadProps = Omit<
  JSX.IntrinsicElements["thead"],
  "className" | "children"
> & {
  children: React.ReactElement<TRowProps> | React.ReactElement<TRowProps>[];
  className?: ClassValue;
};

export default function THead({ children, className, ...rest }: THeadProps) {
  return (
    <thead className={clsxm("border-b border-gray-300", className)} {...rest}>
      {children}
    </thead>
  );
}
