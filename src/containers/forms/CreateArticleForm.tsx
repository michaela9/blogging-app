"use client";

import React from "react";
import { useIntl } from "react-intl";

import useCreateArticle from "@/hooks/useCreateArticle";

import FormFileField from "@/components/form/FileInput";
import { Input } from "@/components/form/input";
import MarkdownEditorField from "@/components/form/MarkdownEditor";
import TextArea from "@/components/form/TextArea";
import Loader from "@/components/Loader";

import CreateArticleFormHeader from "./CreateArticleFormHeader";

export default function CreateArticleForm() {
  const intl = useIntl();

  const {
    handleSubmit,
    isSubmitting,
    setValue,
    getValues,
    errors,
    register,
    onSubmit,
  } = useCreateArticle();

  if (isSubmitting) {
    return <Loader />;
  }

  return (
    <div className="max-w-5xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <CreateArticleFormHeader isSubmitting={isSubmitting} />
        <Input
          type="text"
          name="title"
          label={intl.formatMessage({
            id: "containers.forms.createArticleForm.articleTitle",
            defaultMessage: "Article Title",
          })}
          register={register}
          error={errors.title}
          placeholder="Article Title"
        />
        <TextArea
          name="perex"
          label={intl.formatMessage({
            id: "containers.forms.createArticleForm.perex",
            defaultMessage: "Perex",
          })}
          placeholder="Perex"
          register={register}
          error={errors.perex}
          rows={5}
        />
        <FormFileField
          name="image"
          label={intl.formatMessage({
            id: "containers.forms.createArticleForm.image",
            defaultMessage: "Featured Image",
          })}
          register={register}
          error={errors.image}
        />
        <MarkdownEditorField
          name="content"
          label={intl.formatMessage({
            id: "containers.forms.createArticleForm.content",
            defaultMessage: "Content",
          })}
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
