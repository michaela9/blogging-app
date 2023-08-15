import Loader from "@/components/Loader";
import { articlesUrl } from "@/config/router";
import { useGet } from "@/hooks/api";
import type { ArticleT, PaginationT } from "@/types/types";
import React from "react";
import { useIntl } from "react-intl";
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
