import type { FieldValues, UseFormRegister } from "react-hook-form";

import clsxm from "@/utils/clsxm";

// import FormErrorMessage from "@/component/front/form/FormErrorMessage";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  label: string;
  register?: UseFormRegister<FieldValues>;
  errorMessage?: string;
};

const TextField = ({ name, label, register, errorMessage, ...rest }: Props) => {
  return (
    <div className="relative">
      <input
        id={name}
        type="text"
        className={clsxm(
          "h-12 w-full rounded-lg border px-4 peer border-nb-gray-light bg-white  placeholder-transparent focus:border-nb-green focus:ring-nb-green",
        )}
        placeholder={label}
        {...register(name)}
        {...rest}
      />
      <label
        htmlFor={name}
        className={clsxm(
          "absolute -top-3 left-3 bg-white px-1 text-sm text-nb-gray-text transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:bg-white peer-focus:text-sm peer-focus:text-nb-green",
        )}
      >
        {label}
      </label>
      {errorMessage && "sihsu"}
    </div>
  );
};

export default TextField;
