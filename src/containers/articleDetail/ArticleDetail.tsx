"use client";

import type { ArticleDetailT, ArticleT, PaginationT } from "@/types/types";

import React from "react";
import { useIntl } from "react-intl";

import { articlesUrl } from "@/config/router";

import { useGet } from "@/hooks/api";

import Loader from "@/components/Loader";

import ArticleDetailComponent from "./ArticleDetailComponent";

type Props = {
  id: string;
};

export default function ArticleDetail({ id }: Props) {
  const intl = useIntl();

  const { data, loading, error } = useGet<ArticleDetailT>(
    `${articlesUrl}/${id}`,
  );

  const {
    data: relatedArticlesData,
    loading: relatedArticlesLoading,
    error: relatedArticlesError,
  } = useGet<{
    pagination: PaginationT;
    items: ArticleT[];
  }>(articlesUrl);

  if (loading || relatedArticlesLoading) {
    return <Loader />;
  }

  if (error) {
    return intl.formatMessage(
      {
        id: "containers.articleDetail.errorMessage",
        defaultMessage: "Error loading article detail: {error_message}",
      },
      { error_message: error.message },
    );
  }

  if (!data) {
    return intl.formatMessage({
      id: "containers.articleDetail.noArticleFound",
      defaultMessage: "Article detail not found.",
    });
  }

  if (relatedArticlesError) {
    return intl.formatMessage(
      {
        id: "containers.relatedArticles.errorMessage",
        defaultMessage: "Error loading related articles: {error_message}",
      },
      { error_message: relatedArticlesError.message },
    );
  }

  if (!relatedArticlesData || relatedArticlesData.items.length === 0) {
    return intl.formatMessage({
      id: "containers.relatedArticles.noArticlesFound",
      defaultMessage: "No articles found.",
    });
  }

  const articles = relatedArticlesData.items;
  const sortedArticles = articles.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );

  return (
    <ArticleDetailComponent article={data} relatedArticles={sortedArticles} />
  );
}
