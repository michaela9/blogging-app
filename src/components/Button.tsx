import type { ClassValue } from "clsx";
import type { ReactNode } from "react";

import clsxm from "@/utils/clsxm";

type Props = Omit<JSX.IntrinsicElements["button"], "className"> & {
  style?: "default" | "primary" | "secondary";
  disabled?: boolean;
  className?: ClassValue;
  children: ReactNode;
};

const Button = ({
  style = "primary",
  children,
  className,
  type,
  ...rest
}: Props) => {
  return (
    <button
      className={clsxm(className, "px-4 py-2 rounded-md", {
        "bg-primary text-white": style === "primary",
        "text-primary border border-primary": style === "secondary",
      })}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;