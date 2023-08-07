"use client";

import type { ClassValue } from "clsx";
import type { ReactElement } from "react";

import clsxm from "@/utils/clsxm";

import type { TBodyProps } from "@/components/table/TBody";
import type { THeadProps } from "@/components/table/THead";

type Props = {
  children: ReactElement<THeadProps>[] | ReactElement<TBodyProps>;
  className?: ClassValue;
};
export default function TableComponent({ children, className }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className={clsxm("md:w-full w-[800px] mx-auto", className)}>
        {children}
      </table>
    </div>
  );
}
