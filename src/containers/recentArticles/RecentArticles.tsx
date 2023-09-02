import type { ArticleT } from "@/types/types";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import React from "react";

import { sortArticles } from "@/utils/sortArticles";

import Heading from "@/components/Heading";

import ArticleItem from "./ArticleItem";

type Props = {
  articles: ArticleT[];
};

export default function RecentArticles({ articles }: Props) {
  const sortedArticles = sortArticles(articles);
  const t = useTranslations("RecentArticles");

  return (
    <div className="space-y-4 md:space-y-12">
      <Link href="/" locale="en">
        English
      </Link>
      <Link href="/" locale="cs">
        Czech
      </Link>
      <Heading headingLevel="h1" size="s1">
        {t("title")}
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
