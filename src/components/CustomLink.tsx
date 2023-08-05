import type { ClassValue } from "clsx";

import Link from "next/link";
import { forwardRef } from "react";

import clsxm from "@/utils/clsxm";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  style?: "default" | "primary" | "secondary";
  href: string;
  className?: ClassValue;
};

const CustomLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { href, children, style = "default", className, ...rest } = props;
  return (
    <Link
      ref={ref}
      href={href}
      className={clsxm(className, {
        "": style === "default",
        "bg-primary rounded-md px-4 py-2 text-white hover:bg-opacity-80":
          style === "primary",
        "text-primary hover:opacity-70": style === "secondary",
      })}
      {...rest}
    >
      {children}
    </Link>
  );
});

export default CustomLink;
