"use client";

import type { ArticleDetailT } from "@/types/types";

import axios from "axios";
import { useIntl } from "react-intl";

import { articlesUrl } from "@/config/router";

import Button from "@/components/Button";
import Description from "@/components/Description";
import Heading from "@/components/Heading";

type Props = {
  articleId: string;
  closeModal: () => void;
};

export default function DeleteArticle({ articleId, closeModal }: Props) {
  const intl = useIntl();

  const handleDeleteArticle = async () => {
    try {
      const response = await axios.post<ArticleDetailT>(
        `${articlesUrl}/${articleId}`,
        {
          articleId: articleId,
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

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.forms.deleteArticle.title",
            defaultMessage: "Delete the article",
          })}
        </Heading>
        <Description className="text-gray-500">
          {intl.formatMessage({
            id: "containers.forms.deleteArticle.description",
            defaultMessage: "Do you really want to delete the article?",
          })}
        </Description>
      </div>
      <div className="flex gap-4 items-center">
        <Button style="primary" onClick={handleDeleteArticle}>
          {intl.formatMessage({
            id: "containers.forms.deleteArticle.submit",
            defaultMessage: " Yes, please!",
          })}
        </Button>
        <Button style="secondary" onClick={closeModal}>
          {intl.formatMessage({
            id: "containers.forms.deleteArticle.closeButton",
            defaultMessage: "No, thanks! ",
          })}
        </Button>
      </div>
    </div>
  );
}
