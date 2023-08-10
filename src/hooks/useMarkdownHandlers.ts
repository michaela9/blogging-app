import type { FieldValues, UseFormSetValue } from "react-hook-form";

export type SetValue<TFieldValues extends FieldValues = FieldValues> =
  UseFormSetValue<TFieldValues>;

export type GetValues<TFieldValues extends FieldValues = FieldValues> =
  () => TFieldValues;

const useMarkdownHandlers = (setValue: SetValue, getValues: GetValues) => {
  const handleBold = () => {
    setValue("content", `${getValues().content}**bold text**`);
  };

  const handleItalic = () => {
    setValue("content", `${getValues().content}*italic text*`);
  };

  const handleHeading1 = () => {
    setValue("content", `${getValues().content}# Heading\n`);
  };

  const handleHeading2 = () => {
    setValue("content", `${getValues().content}## Heading\n`);
  };

  const handleHeading3 = () => {
    setValue("content", `${getValues().content}### Heading\n`);
  };

  return {
    handleBold,
    handleItalic,
    handleHeading1,
    handleHeading2,
    handleHeading3,
  };
};

export default useMarkdownHandlers;
