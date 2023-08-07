"use client";

import type { ArticleT } from "@/types/types";

import React from "react";
import { useIntl } from "react-intl";

import Heading from "@/components/Heading";

import ArticleItem from "./ArticleItem";

type Props = {
  articles: ArticleT[];
};

const RecentArticles = ({ articles }: Props) => {
  const intl = useIntl();
  console.log(articles);
  return (
    <div className="space-y-4 md:space-y-12">
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
