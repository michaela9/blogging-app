"use client";

import type {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import type { ArticleDetailT } from "@/types/types";

import React from "react";
import { useIntl } from "react-intl";

import useGetBlobFromImageId from "@/hooks/useGetBlobFromImageId";
import type { GetValues, SetValue } from "@/hooks/useMarkdownHandlers";

import FormFileField from "@/components/form/FormFileField";
import FormTextAreaField from "@/components/form/FormTextAreaField";
import FormTextField from "@/components/form/FormTextField";
import MarkdownEditorField from "@/components/form/MarkdownEditorField";

import type { EditArticleSchemaT } from "@/schema/zodSchema";

import EditArticleFormHeader from "./EditArticleFormHeader";

type Props = {
  article: ArticleDetailT;
  onSubmit: SubmitHandler<EditArticleSchemaT>;
  handleSubmit: UseFormHandleSubmit<EditArticleSchemaT>;
  register: UseFormRegister<EditArticleSchemaT>;
  errors: FieldErrors<EditArticleSchemaT>;
  control: Control<EditArticleSchemaT>;
  getValues: GetValues;
  setValue: SetValue;
  watch: UseFormWatch<EditArticleSchemaT>;
};

export default function EditArticleForm({
  article,
  onSubmit,
  handleSubmit,
  control,
  register,
  errors,
  setValue,
  getValues,
  watch,
}: Props) {
  const intl = useIntl();

  const { blobURL, data } = useGetBlobFromImageId(article.imageId);

  return (
    <div className="max-w-5xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <EditArticleFormHeader />
        <FormTextField
          name="title"
          label={intl.formatMessage({
            id: "containers.forms.createArticle.articleTitle",
            defaultMessage: "Article Title",
          })}
          control={control}
          defaultValue={article.title}
          placeholder="Article Title"
          register={register}
          error={errors.title}
        />
        <FormTextAreaField
          name="perex"
          label={intl.formatMessage({
            id: "containers.forms.createArticle.perex",
            defaultMessage: "Perex",
          })}
          control={control}
          placeholder="Perex"
          defaultValue={article.perex}
          register={register}
          error={errors.perex}
        />
        <div className="space-y-2">
          {/* {previewImage && (
            <Image
              src={previewImage}
              alt={article.title}
              className="shrink-0 object-cover overflow-hidden"
              width={150}
              height={150}
            />
          )} */}
          <FormFileField
            name="image"
            label={intl.formatMessage({
              id: "containers.forms.createArticle.image",
              defaultMessage: "Featured Image",
            })}
            // defaultValue={blobURL}
            control={control}
            register={register}
            error={errors.image}
          />
        </div>
        <MarkdownEditorField
          name="content"
          label={intl.formatMessage({
            id: "containers.forms.createArticle.content",
            defaultMessage: "Content",
          })}
          control={control}
          defaultValue={article.content}
          placeholder="Content"
          register={register}
          error={errors.content}
          getValues={getValues}
          setValue={setValue}
        />
      </form>
    </div>
  );
}
