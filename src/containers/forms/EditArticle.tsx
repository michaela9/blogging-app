"use client";

import type { SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { z } from "zod";

import { baseUrl } from "@/config/router";

import Button from "@/components/Button";
import FileField from "@/components/form/FileField";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import TextAreaField from "@/components/form/TextAreaField";
import TextField from "@/components/form/TextField";
import Heading from "@/components/Heading";

import { articles } from "@/data/dummy";

type ArticleResponseData = {
  id: string;
  title: string;
  content: string;
  perex: string;
  image: string;
};

type ResponseData = {
  data: ArticleResponseData;
};

type Props = {
  id: string;
};

const editArticleSchema = z.object({
  title: z.string(),
  perex: z.string(),
  content: z.string().min(1, { message: "Username is required" }),
  image: z.string(),
});

export type EditArticleSchemaT = z.infer<typeof editArticleSchema>;

const EditArticle = ({ id }: Props) => {
  const intl = useIntl();
  const article = articles[0];

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditArticleSchemaT>({
    resolver: zodResolver(editArticleSchema),
  });

  const onSubmit: SubmitHandler<EditArticleSchemaT> = async (formData) => {
    try {
      const response = await axios.post<ResponseData>(
        `${baseUrl}/articles/${id}`,
        {
          title: formData.title,
          content: formData.content,
          perex: formData.perex,
          image: formData.image,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
            Authorization: "08709433-7233-476f-9a70-ac1dbf954e87",
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
            src={article.image}
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
};

export default EditArticle;
