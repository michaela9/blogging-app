"use client";

import type { SubmitHandler } from "react-hook-form";
import type { ArticleDetailT } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";

import { articlesUrl } from "@/config/router";

import Button from "@/components/Button";
import FileField from "@/components/form/FileField";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import TextAreaField from "@/components/form/TextAreaField";
import TextField from "@/components/form/TextField";
import Heading from "@/components/Heading";

import { articleDetail } from "@/data/dummy";
import type { EditArticleSchemaT } from "@/schema/zodSchema";
import { editArticleSchema } from "@/schema/zodSchema";

type Props = {
  id: string;
};

export default function EditArticle({ id }: Props) {
  const intl = useIntl();
  const article = articleDetail;

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditArticleSchemaT>({
    resolver: zodResolver(editArticleSchema),
  });

  const onSubmit: SubmitHandler<EditArticleSchemaT> = async (formData) => {
    try {
      const response = await axios.post<ArticleDetailT>(
        `${articlesUrl}/${id}`,
        {
          title: formData.title,
          content: formData.content,
          perex: formData.perex,
          image: formData.image,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": " b21611a3-d995-499c-80d5-4e0f72db5ae1",
            Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
          },
        },
      );

      if (!response.data) {
        throw new Error("Network response was not ok.");
      }

      return response.data;
    } catch (error) {
      throw new Error("Error editing article. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-4xl">
      <div className="flex gap-8 items-center">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.forms.editArticle.title",
            defaultMessage: "Edit Article",
          })}
        </Heading>
        <Button style="primary" type="submit" disabled={isSubmitting}>
          {intl.formatMessage({
            id: "containers.forms.createArticle.articlePublish",
            defaultMessage: "Publish Article",
          })}
        </Button>
      </div>
      <div className="w-full space-y-8">
        <FormFieldWrapper>
          <Label name="title">
            {intl.formatMessage({
              id: "containers.forms.createArticle.articleTitle",
              defaultMessage: "Article Title",
            })}
          </Label>
          <TextField
            placeholder="My first article"
            defaultValue={article?.title}
            name="title"
          />
          {errors.title && <span>{errors.title.message}</span>}
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label name="title">
            {intl.formatMessage({
              id: "containers.forms.createArticle.featuredImage",
              defaultMessage: "Featured Image",
            })}
          </Label>
          <Image
            src={article.imageId}
            alt="Article image"
            className="shrink-0 w-28 h-20 object-cover overflow-hidden"
            width={100}
            height={100}
          />
          <FileField name="image" />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label name="title">
            {intl.formatMessage({
              id: "containers.forms.createArticle.content",
              defaultMessage: "Content",
            })}
          </Label>
          <TextAreaField
            defaultValue={article.content}
            placeholder="Content"
            name="content"
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label name="title">
            {intl.formatMessage({
              id: "containers.forms.createArticle.perex",
              defaultMessage: "Perex",
            })}
          </Label>
          <TextAreaField
            placeholder="Perex"
            defaultValue={article?.perex}
            name="perex"
          />
        </FormFieldWrapper>
      </div>
    </form>
  );
}
