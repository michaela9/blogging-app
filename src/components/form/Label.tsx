import type { ReactNode } from "react";

type Props = Omit<JSX.IntrinsicElements["label"], "className"> & {
  name: string;
  children: ReactNode;
};

const Label = ({ name, children, ...rest }: Props) => {
  return (
    <label htmlFor={name} className="flex flex-col gap-2" {...rest}>
      {children}
    </label>
  );
};

export default Label;
