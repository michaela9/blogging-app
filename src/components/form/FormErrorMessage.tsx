"use client";

import type { ClassValue } from "clsx";

import clsxm from "@/utils/clsxm";

type Props = {
  errorMessage: string;
  className?: ClassValue;
  style?: "login";
};

export default function FormErrorMessage({
  errorMessage,
  className,
  style,
}: Props) {
  return (
    <span
      className={clsxm(
        "z-10 px-2 py-0.5 text-xs text-red-500",
        { "absolute left-0 top-12": style === "login" },
        className,
      )}
    >
      {errorMessage}
    </span>
  );
}
