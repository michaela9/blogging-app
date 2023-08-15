"use client";

import type { ArticleDetailT, ArticleT, PaginationT } from "@/types/types";

import React from "react";
import { useIntl } from "react-intl";

import { articlesEndpoint } from "@/config/router";

import { useGet } from "@/hooks/api";
import { sortArticles } from "@/utils/sortArticles";

import ErrorMessage from "@/components/ErrorMessage";
import Loader from "@/components/Loader";

import ArticleDetailComponent from "./ArticleDetailComponent";

type Props = {
  id: string;
};

export default function ArticleDetail({ id }: Props) {
  const intl = useIntl();

  const { data, loading, error } = useGet<ArticleDetailT>(
    `${articlesEndpoint}/${id}`,
  );

  const {
    data: relatedArticlesData,
    loading: relatedArticlesLoading,
    error: relatedArticlesError,
  } = useGet<{
    pagination: PaginationT;
    items: ArticleT[];
  }>(articlesEndpoint);

  if (loading || relatedArticlesLoading) {
    return <Loader />;
  }

  if (!relatedArticlesData || relatedArticlesData.items.length === 0) {
    return (
      <ErrorMessage
        message={intl.formatMessage({
          id: "containers.relatedArticles.noArticlesFound",
          defaultMessage: "No articles found.",
        })}
      />
    );
  }

  if (error) {
    return (
      <ErrorMessage
        message={intl.formatMessage(
          {
            id: "containers.articleDetail.errorMessage",
            defaultMessage: "Error loading article detail: {error_message}",
          },
          { error_message: error.message },
        )}
      />
    );
  }

  if (!data) {
    return (
      <ErrorMessage
        message={intl.formatMessage({
          id: "containers.articleDetail.noArticleFound",
          defaultMessage: "Article detail not found.",
        })}
      />
    );
  }

  if (relatedArticlesError) {
    return (
      <ErrorMessage
        message={intl.formatMessage(
          {
            id: "containers.relatedArticles.errorMessage",
            defaultMessage: "Error loading related articles: {error_message}",
          },
          { error_message: relatedArticlesError.message },
        )}
      />
    );
  }

  const articles = relatedArticlesData.items;
  const sortedArticles = sortArticles(articles);

  return (
    <ArticleDetailComponent article={data} relatedArticles={sortedArticles} />
  );
}
