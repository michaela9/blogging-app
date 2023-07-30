import clsxm from "@/utils/clsxm";
import { HTMLAttributes, createElement } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: "s1" | "s2" | "s3" | "s4";
}

const Heading = ({ headingLevel, children, className, size }: HeadingProps) => {
  const MyHeading = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(headingLevel, props, children);

  return (
    <MyHeading
      className={clsxm(className, "font-medium", {
        "text-2xl md:text-4xl": size === "s1",
        "text-xl md:text-3xl": size === "s2",
        "text-xl md:text-2xl": size === "s3",
        "text-sm md:text-base": size === "s4",
      })}
    >
      {children}
    </MyHeading>
  );
};

export default Heading;
