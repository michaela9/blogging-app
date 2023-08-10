"use client";

import type { ClassValue } from "clsx";

import clsxm from "@/utils/clsxm";

type Props = {
  errorMessage: string | undefined;
  className?: ClassValue;
};

export default function FormErrorMessage({ errorMessage, className }: Props) {
  return (
    <span className={clsxm("z-10 px-2 py-0.5 text-xs text-red-500", className)}>
      {errorMessage}
    </span>
  );
}
