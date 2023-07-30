import type { HTMLAttributes } from "react";

import clsxm from "@/utils/clsxm";

type Props = {
  style?: "primary" | "secondary";
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({ style = "primary", children, className }: Props) => {
  return (
    <button
      className={clsxm(className, "px-4 py-2 rounded-md", {
        "bg-primary text-white": style === "primary",
        "bg-gray-500 text-white": style === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
