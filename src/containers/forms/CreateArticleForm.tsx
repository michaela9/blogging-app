"use client";

import { useTranslations } from "next-intl";
import React from "react";

import useCreateArticle from "@/hooks/useCreateArticle";

import FormFileField from "@/components/form/FileInput";
import { Input } from "@/components/form/input";
import MarkdownEditorField from "@/components/form/MarkdownEditor";
import TextArea from "@/components/form/TextArea";
import Loader from "@/components/Loader";

import CreateArticleFormHeader from "./CreateArticleFormHeader";

export default function CreateArticleForm() {
  const t = useTranslations("Article");

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
          label={t("title")}
          register={register}
          error={errors.title}
          placeholder="Article Title"
        />
        <TextArea
          name="perex"
          label={t("perex")}
          placeholder="Perex"
          register={register}
          error={errors.perex}
          rows={5}
        />
        <FormFileField
          name="image"
          label={t("featuredImage")}
          register={register}
          error={errors.image}
        />
        <MarkdownEditorField
          name="content"
          label={t("content")}
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
