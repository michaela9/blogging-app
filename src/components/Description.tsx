"use client";

import clsxm from "@/utils/clsxm";

type Props = {
  size?: "sm" | "base" | "xl";
} & React.HTMLAttributes<HTMLParagraphElement>;

const Description = ({ children, className, size = "base" }: Props) => {
  return (
    <p
      className={clsxm(className, {
        "text-xs md:text-sm": size === "sm",
        "text-sm md:text-base": size === "base",
        "text-base md:text-xl": size === "xl",
      })}
    >
      {children}
    </p>
  );
};

export default Description;
