"use client";

import type { ArticleDetailT, ArticleT, PaginationT } from "@/types/types";

import { useTranslations } from "next-intl";
import React from "react";

import { articlesEndpoint } from "@/config/router";

import { useGet } from "@/hooks/api";
import { sortArticles } from "@/utils/sortArticles";

import Loader from "@/components/Loader";

import ArticleDetailComponent from "./ArticleDetailComponent";

type Props = {
  id: string;
};

export default function ArticleDetail({ id }: Props) {
  const t = useTranslations("ErrorMessages");

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
    return t("noArticlesFound");
  }

  if (error) {
    return t("errorLoadingArticleDetail", { errorMessage: error.message });
  }

  if (!data) {
    return t("noArticleFound");
  }

  if (relatedArticlesError) {
    return t("noArticlesFound");
  }

  const articles = relatedArticlesData.items;
  const sortedArticles = sortArticles(articles);

  return (
    <ArticleDetailComponent article={data} relatedArticles={sortedArticles} />
  );
}
