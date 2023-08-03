"use client";

import React from "react";
import { useIntl } from "react-intl";

import Heading from "@/components/Heading";

import type { Article } from "@/data/dummy";

import ArticleItem from "./ArticleItem";

type Props = {
  articles: Article[];
};

const RecentArticles = ({ articles }: Props) => {
  const intl = useIntl();
  return (
    <div className="space-y-4 sm:space-y-12">
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "containers.recentArticles.title",
          defaultMessage: "Recent Articles",
        })}
      </Heading>
      <div className="space-y-10 sm:space-y-6">
        {articles.map((article) => (
          <div key={article.articleId}>
            <ArticleItem article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
