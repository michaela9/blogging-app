import type { ClassValue } from "clsx";

import clsxm from "@/utils/clsxm";

type Props = Omit<JSX.IntrinsicElements["th"], "className"> & {
  className?: ClassValue;
};

export default function Th({ children, className, ...rest }: Props) {
  return (
    <th className={clsxm("text-left px-4 text-sm", className)} {...rest}>
      {children}
    </th>
  );
}
