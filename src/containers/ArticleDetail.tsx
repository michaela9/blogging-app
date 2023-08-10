"use client";

import type { ArticleDetailT } from "@/types/types";

import React from "react";
import { useIntl } from "react-intl";

import { articlesUrl } from "@/config/router";

import { useGet } from "@/hooks/api";

import Loader from "@/components/Loader";

import { articles } from "@/data/dummy";

import ArticleDetailComponent from "./ArticleDetailComponent";

type Props = {
  id: string;
};

export default function ArticleDetail({ id }: Props) {
  const intl = useIntl();

  const { data, loading, error } = useGet<ArticleDetailT>(
    `${articlesUrl}/${id}`,
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return intl.formatMessage(
      {
        id: "containers.recentArticles.errorMessage",
        defaultMessage: "Error loading articles: {error_message}",
      },
      { error_message: error.message },
    );
  }

  if (!data) {
    return intl.formatMessage({
      id: "containers.recentArticles.noArticlesFound",
      defaultMessage: "Article not found.",
    });
  }

  return <ArticleDetailComponent article={data} relatedArticles={articles} />;
}
