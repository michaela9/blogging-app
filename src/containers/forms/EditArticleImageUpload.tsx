import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ArticleDetailT } from "@/types/types";

import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

import FormFileField from "@/components/form/FileInput";

import type { EditArticleSchemaT } from "@/schema/zodSchema";

type Props = {
  currentImage: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  article: ArticleDetailT;
  register: UseFormRegister<EditArticleSchemaT>;
  errors: FieldErrors<EditArticleSchemaT>;
};

export default function EditArticleImageUpload({
  currentImage,
  handleFileChange,
  article,
  register,
  errors,
}: Props) {
  const intl = useIntl();

  return (
    <div className="space-y-2">
      {currentImage && (
        <Image
          src={currentImage}
          alt={article.title}
          className="shrink-0 object-cover overflow-hidden w-40 h-40"
          width={150}
          height={150}
        />
      )}
      <FormFileField
        name="image"
        label={intl.formatMessage({
          id: "containers.forms.editArticleFormInside.image",
          defaultMessage: "Featured Image",
        })}
        register={register}
        error={errors.image}
        onChange={handleFileChange}
      />
    </div>
  );
}
