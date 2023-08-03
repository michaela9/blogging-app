import type { FieldValues, UseFormRegister } from "react-hook-form";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  register?: UseFormRegister<FieldValues>;
  errorMessage?: string;
};

const FileField = ({ name, register, errorMessage, ...rest }: Props) => {
  return (
    <>
      <input
        id={name}
        type="file"
        accept="image/png, image/jpeg"
        {...register(name)}
        {...rest}
      />

      {errorMessage && "sihsu"}
    </>
  );
};

export default FileField;
