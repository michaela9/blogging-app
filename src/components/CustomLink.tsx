"use client";

import type { ClassValue } from "clsx";

import Link from "next/link";
import { forwardRef } from "react";

import clsxm from "@/utils/clsxm";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  style?: "default" | "primary" | "secondary" | "tertiary";
  href: string;
  className?: ClassValue;
  active?: boolean;
};

const CustomLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const {
    href,
    children,
    style = "default",
    active,
    className,
    ...rest
  } = props;
  return (
    <Link
      ref={ref}
      href={href}
      className={clsxm(className, {
        "hover:opacity-80 text-primary-text": style === "default",
        "bg-primary rounded-md px-4 py-2 text-white hover:bg-opacity-80":
          style === "primary",
        "text-primary hover:opacity-70": style === "secondary",
        "text-middle-gray hover:opacity-80": style === "tertiary",
        "text-primary": active,
      })}
      {...rest}
    >
      {children}
    </Link>
  );
});

export default CustomLink;
