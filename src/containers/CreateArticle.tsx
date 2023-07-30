"use client";

import React from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

const CreateArticle = () => {
  const intl = useIntl();
  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.createArticle.heading",
            defaultMessage: "Create Article",
          })}
        </Heading>
        <Button style="primary">
          {intl.formatMessage({
            id: "containers.createArticle.articlePublish",
            defaultMessage: "Publish Article",
          })}
        </Button>
      </div>
      <form className="space-y-8 flex flex-col justify-end items-end">
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
            />
          </div>
          <label>
            {intl.formatMessage({
              id: "containers.createArticle.featuredImage",
              defaultMessage: "Featured Image",
            })}
          </label>
          <Button style="secondary">
            {intl.formatMessage({
              id: "containers.createArticle.uploadTheImage",
              defaultMessage: "upload the image",
            })}
          </Button>
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
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
