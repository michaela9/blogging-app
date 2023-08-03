import type { FieldValues, UseFormRegister } from "react-hook-form";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  register?: UseFormRegister<FieldValues>;
  errorMessage?: string;
};

const TextField = ({ name, register, errorMessage, ...rest }: Props) => {
  return (
    <>
      <input
        id={name}
        type="text"
        className="rounded-md border-gray-300"
        {...register(name)}
        {...rest}
      />

      {errorMessage && "sihsu"}
    </>
  );
};

export default TextField;
