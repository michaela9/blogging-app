"use client";

import type { SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
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
import type { ArticleDetail } from "@/types/types";

const createArticleSchema = z.object({
  title: z.string(),
  perex: z.string(),
  content: z.string().min(1, { message: "Username is required" }),
});

export type CreateArticleSchemaT = z.infer<typeof createArticleSchema>;

const CreateArticle = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<CreateArticleSchemaT>({
    resolver: zodResolver(createArticleSchema),
  });

  const onSubmit: SubmitHandler<CreateArticleSchemaT> = async (formData) => {
    try {
      const response = await axios.post<ArticleDetail>(
        `${baseUrl}/articles`,
        {
          title: formData.title,
          content: formData.content,
          perex: formData.perex,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.APP_API_KEY,
            Authorization: process.env.APP_TOKEN,
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

  const intl = useIntl();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 flex flex-col justify-end items-end"
    >
      <div className="flex gap-4 items-center">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.forms.createArticle.title",
            defaultMessage: "Create Article",
          })}
        </Heading>
        <Button style="primary" type="submit">
          {intl.formatMessage({
            id: "containers.forms.createArticle.articlePublish",
            defaultMessage: "Publish Article",
          })}
        </Button>
      </div>

      <div className="w-full space-y-4">
        <FormFieldWrapper>
          <Label name="title">
            {intl.formatMessage({
              id: "containers.forms.createArticle.articleTitle",
              defaultMessage: "Article Title",
            })}
          </Label>
          <TextField placeholder="My first article" name="title" />
          {errors.title && <span>{errors.title.message}</span>}
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label name="title">
            {intl.formatMessage({
              id: "containers.forms.createArticle.image",
              defaultMessage: "Featured Image",
            })}
          </Label>
          <FileField name="image" />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <Label name="content">
            {intl.formatMessage({
              id: "containers.forms.createArticle.content",
              defaultMessage: "Content",
            })}
          </Label>
          <TextAreaField placeholder="Content" name="content" />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label name="perex">
            {intl.formatMessage({
              id: "containers.forms.createArticle.perex",
              defaultMessage: "Perex",
            })}
          </Label>
          <TextAreaField placeholder="Perex" name="perex" />
        </FormFieldWrapper>
      </div>
    </form>
  );
};

export default CreateArticle;
