"use client";

import React from "react";
import { useIntl } from "react-intl";

import useCreateArticle from "@/hooks/useCreateArticle";
import useMarkdownHandlers from "@/hooks/useMarkdownHandlers";

import Button from "@/components/Button";
import FileField from "@/components/form/FileField";
import FormErrorMessage from "@/components/form/FormErrorMessage";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import TextAreaField from "@/components/form/TextAreaField";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import MarkdownEditorButtons from "@/components/MarkdownEditorButtons";
import CreateArticleFormHeader from "./CreateArticleFormHeader";
import FormTextField from "@/components/form/FormTextField";
import FormTextAreaField from "@/components/form/FormTextAreaField";
import MarkdownEditorField from "@/components/form/MarkdownEditorField";
import FormFileField from "@/components/form/FormFileField";

export default function CreateArticle() {
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
          error={errors.title}
        />
        <FormFileField
          name="image"
          label={intl.formatMessage({
            id: "containers.forms.createArticle.image",
            defaultMessage: "Featured Image",
          })}
          control={control}
          register={register}
          error={errors.image}
        />
        {/* <FormFieldWrapper>
          <Label name="image">
            
          </Label>
          <FileField name="image" register={register} />
        </FormFieldWrapper> */}
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
