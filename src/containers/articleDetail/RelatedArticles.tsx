import type { ArticleT } from "@/types/types";

import React from "react";

import ArticleShortItem from "./ArticleShortItem";

type Props = {
  relatedArticles: ArticleT[];
};

export default function RelatedArticles({ relatedArticles }: Props) {
  return (
    <div className="space-y-6">
      {relatedArticles.map((article) => (
        <ArticleShortItem key={article.articleId} article={article} />
      ))}
    </div>
  );
}
