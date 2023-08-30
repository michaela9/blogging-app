import type { ReactNode } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
} from "react-hook-form";

import React from "react";

import type { GetValues, SetValue } from "@/hooks/useMarkdownHandlers";
import useMarkdownHandlers from "@/hooks/useMarkdownHandlers";

import FormErrorMessage from "@/components/form/FormErrorMessage";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import MarkdownEditorButtons from "@/components/MarkdownEditorButtons";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: ReactNode;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  defaultValue?: PathValue<T, Path<T>>;
  placeholder?: string;
  rows?: number;
  getValues: GetValues;
  setValue: SetValue;
};

export default function MarkdownEditor<T extends FieldValues>({
  name,
  label,
  defaultValue,
  register,
  setValue,
  getValues,
  error,
}: Props<T>) {
  const {
    handleBold,
    handleItalic,
    handleHeading1,
    handleHeading2,
    handleHeading3,
  } = useMarkdownHandlers(setValue, getValues);
  return (
    <FormFieldWrapper>
      <Label name="content">{label}</Label>
      <div className="space-y-2">
        <MarkdownEditorButtons
          onBold={handleBold}
          onItalic={handleItalic}
          onHeading1={handleHeading1}
          onHeading2={handleHeading2}
          onHeading3={handleHeading3}
        />
        <textarea
          className="rounded-md border-gray-300 w-full"
          id={name}
          defaultValue={defaultValue}
          cols={50}
          rows={10}
          {...register(name)}
        />
        {error && <FormErrorMessage errorMessage={error.message} />}
      </div>
    </FormFieldWrapper>
  );
}
