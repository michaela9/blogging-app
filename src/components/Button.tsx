"use client";

import type { ClassValue } from "clsx";
import type { ReactNode } from "react";

import clsxm from "@/utils/clsxm";

type Props = Omit<JSX.IntrinsicElements["button"], "className"> & {
  style?: "default" | "primary" | "secondary" | "markdown";
  disabled?: boolean;
  className?: ClassValue;
  children: ReactNode;
  type?: "button" | "submit";
};

export default function Button({
  style = "primary",
  children,
  className,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      className={clsxm(className, "rounded-md", {
        "bg-primary text-white hover:bg-opacity-80 px-4 py-2 disabled:bg-gray-200 disabled:text-gray-700":
          style === "primary",
        "text-primary border border-primary hover:opacity-70 px-4 py-2 ":
          style === "secondary",
        "bg-gray-100 border border-gray-500 rounded-md px-2 hover:bg-opacity-80":
          style === "markdown",
      })}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
