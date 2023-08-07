"use client"

import type { ClassValue } from "clsx";
import type { ReactElement } from "react";

import clsxm from "@/utils/clsxm";

import type Td from "@/components/table/Td";
import type Th from "@/components/table/Th";

export type TRowProps = Omit<
  JSX.IntrinsicElements["tr"],
  "className" | "children"
> & {
  children: ReactElement<typeof Td>[] | ReactElement<typeof Th>;
  className?: ClassValue;
};

export default function TRow({ children, className, ...rest }: TRowProps) {
  return (
    <tr className={clsxm("border-b border-gray-400", className)} {...rest}>
      {children}
    </tr>
  );
}
