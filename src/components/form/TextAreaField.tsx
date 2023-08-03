import type { ClassValue } from "clsx";
import type { FieldValues, UseFormRegister } from "react-hook-form";

import clsxm from "@/utils/clsxm";

type Props = Omit<JSX.IntrinsicElements["textarea"], "className"> & {
  name: string;
  register?: UseFormRegister<FieldValues>;
  errorMessage?: string;
  className?: ClassValue;
};

const TextAreaField = ({
  name,
  register,
  className,
  errorMessage,
  ...rest
}: Props) => {
  return (
    <>
      <textarea
        id={name}
        className={clsxm(className, "rounded-md border-gray-300")}
        {...register(name)}
        {...rest}
      />

      {errorMessage && "sihsu"}
    </>
  );
};

export default TextAreaField;
