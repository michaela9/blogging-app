import type { FieldValues, UseFormRegister } from "react-hook-form";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  register?: UseFormRegister<FieldValues>;
  errorMessage?: string;
};

const PasswordField = ({ name, register, errorMessage, ...rest }: Props) => {
  return (
    <>
      <input
        id={name}
        type="password"
        {...register("password")}
        className="rounded-md border-gray-300"
        {...rest}
      />

      {errorMessage && "sihsu"}
    </>
  );
};

export default PasswordField;
