import type { ClassValue } from "clsx";

import clsxm from "@/utils/clsxm";

type Props = Omit<JSX.IntrinsicElements["td"], "className"> & {
  className?: ClassValue;
};

export default function Td({ children, className, ...rest }: Props) {
  return (
    <td className={clsxm("px-4 py-3 text-sm", className)} {...rest}>
      {children}
    </td>
  );
}
