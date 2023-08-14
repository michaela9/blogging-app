"use client";

import React from "react";
import { useIntl } from "react-intl";

import useCreateArticle from "@/hooks/useCreateArticle";

import FormFileField from "@/components/form/FormFileField";
import FormTextAreaField from "@/components/form/FormTextAreaField";
import FormTextField from "@/components/form/FormTextField";
import MarkdownEditorField from "@/components/form/MarkdownEditorField";
import Loader from "@/components/Loader";

import CreateArticleFormHeader from "./CreateArticleFormHeader";

export default function CreateArticleForm() {
  const intl = useIntl();

  const {
    isLoading,
    control,
    handleSubmit,
    setValue,
    getValues,
    errors,
    register,
    onSubmit,
  } = useCreateArticle();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-5xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <CreateArticleFormHeader />
        <FormTextField
          name="title"
          label={intl.formatMessage({
            id: "containers.forms.createArticle.articleTitle",
            defaultMessage: "Article Title",
          })}
          control={control}
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
          register={register}
          error={errors.perex}
        />
        <FormFileField
          name="image"
          label={intl.formatMessage({
            id: "containers.forms.createArticle.image",
            defaultMessage: "Featured Image",
          })}
          register={register}
          error={errors.image}
        />
        <MarkdownEditorField
          name="content"
          label={intl.formatMessage({
            id: "containers.forms.createArticle.content",
            defaultMessage: "Content",
          })}
          control={control}
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
