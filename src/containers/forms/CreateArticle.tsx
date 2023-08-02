"use client";

import React from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { z } from "zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createArticleSchema = z.object({
  title: z.string(),
  perex: z.string(),
  content: z.string().min(1, { message: "Username is required" }),
});

export type CreateArticleSchemaT = z.infer<typeof createArticleSchema>;

const CreateArticle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateArticleSchemaT>({
    resolver: zodResolver(createArticleSchema),
  });

  const onSubmit: SubmitHandler<CreateArticleSchemaT> = async (formData, e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fullstack.exercise.applifting.cz/articles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
            Authorization: "08709433-7233-476f-9a70-ac1dbf954e87",
          },
          body: JSON.stringify({
            title: formData.title,
            content: formData.content,
            perex: formData.perex,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      return data;
    } catch (error) {}
  };

  const intl = useIntl();
  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="flex gap-4 items-center">
          <Heading headingLevel="h1" size="s1">
            {intl.formatMessage({
              id: "containers.createArticle.heading",
              defaultMessage: "Create Article",
            })}
          </Heading>
          <Button style="primary" type="submit">
            {intl.formatMessage({
              id: "containers.createArticle.articlePublish",
              defaultMessage: "Publish Article",
            })}
          </Button>
        </div>

        <div className="w-full space-y-4">
          <div className="flex flex-col gap-2">
            <label>
              {intl.formatMessage({
                id: "containers.createArticle.articleTitle",
                defaultMessage: "Article Title",
              })}
            </label>
            <input
              className="rounded-md border-gray-300"
              placeholder="My first article"
              {...register("title")}
            />
          </div>
          <label>
            {intl.formatMessage({
              id: "containers.createArticle.featuredImage",
              defaultMessage: "Featured Image",
            })}
          </label>
          {/* <div className="flex flex-col gap-2">
            <label>
              {intl.formatMessage({
                id: "containers.createArticle.image",
                defaultMessage: "Image",
              })}
            </label>

            <input
              type="file"
              {...register("image")}
              accept="image/png, image/jpeg"
            />
          </div> */}
          <div className="flex flex-col gap-2">
            <label>
              {intl.formatMessage({
                id: "containers.createArticle.content",
                defaultMessage: "Content",
              })}
            </label>
            <textarea
              className="rounded-md border-gray-300"
              placeholder="Content"
              {...register("content")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>
              {intl.formatMessage({
                id: "containers.createArticle.perex",
                defaultMessage: "Perex",
              })}
            </label>
            <textarea
              className="rounded-md border-gray-300"
              placeholder="Perex"
              {...register("perex")}
            />
          </div>
          {/* <div className="flex flex-col gap-2">
            <label>
              {intl.formatMessage({
                id: "containers.createArticle.imageId",
                defaultMessage: "ImageId",
              })}
            </label>
            <textarea
              className="rounded-md border-gray-300"
              placeholder="ImageId"
              {...register("imageId")}
            />
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
