"use client";

import React from "react";
import { useIntl } from "react-intl";

import { articlesUrl } from "@/config/router";

import { useGet } from "@/hooks/api";

import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

import ArticleItem from "./ArticleItem";
import useGetArticles from "@/hooks/useGetArticles";

export default function RecentArticles() {
  const intl = useIntl();

  const { loading, error, articles, sortedArticles } = useGetArticles();

  return (
    <div className="space-y-4 md:space-y-12">
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "containers.recentArticles.title",
          defaultMessage: "Recent Articles",
        })}
      </Heading>
      <div className="space-y-10 sm:space-y-6">
        {sortedArticles.map((article) => (
          <div key={article.articleId}>
            <ArticleItem article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
