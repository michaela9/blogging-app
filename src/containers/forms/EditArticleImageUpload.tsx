import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ArticleDetailT } from "@/types/types";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

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
  const t = useTranslations("Article");

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
        label={t("featuredImage")}
        register={register}
        error={errors.image}
        onChange={handleFileChange}
      />
    </div>
  );
}
