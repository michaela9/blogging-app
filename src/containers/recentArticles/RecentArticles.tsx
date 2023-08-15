"use client";

import type { ArticleT, PaginationT } from "@/types/types";

import React from "react";
import { useIntl } from "react-intl";

import { articlesEndpoint } from "@/config/router";

import { useGet } from "@/hooks/api";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

import ArticleItem from "./ArticleItem";

export default function RecentArticles() {
  const intl = useIntl();

  const { data, loading, error } = useGet<{
    pagination: PaginationT;
    items: ArticleT[];
  }>(articlesEndpoint);

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

  if (!data || data.items.length === 0) {
    return intl.formatMessage({
      id: "containers.recentArticles.noArticlesFound",
      defaultMessage: "No articles found.",
    });
  }

  const articles = data.items;
  const sortedArticles = articles.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );

  return (
    <div className="space-y-4 md:space-y-12">
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "containers.recentArticles.title",
          defaultMessage: "Recent Articles",
        })}
      </Heading>
      <div className="space-y-10 sm:space-y-8">
        {sortedArticles.map((article) => (
          <div key={article.articleId}>
            <ArticleItem article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
