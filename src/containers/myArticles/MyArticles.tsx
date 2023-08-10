"use client";

import type { ArticleT, PaginationT } from "@/types/types";

import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import { AdminUrl, articlesUrl } from "@/config/router";

import useDelete, { useGet } from "@/hooks/api";

import CustomLink from "@/components/CustomLink";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

import MyArticlesTable from "./MyArticlesTable";

export default function MyArticles() {
  const intl = useIntl();
  const [selectedArticlesIds, setSelectedArticlesIds] = useState<string[]>([]);

  const { data, loading, error, refetch } = useGet<{
    pagination: PaginationT;
    items: ArticleT[];
  }>(articlesUrl);

  const {
    loading: deleteLoading,
    error: deleteError,
    fetchDelete,
  } = useDelete<{
    articleId: string;
  }>();

  const deleteSelectedArticles = async () => {
    const deletePromises = selectedArticlesIds.map((articleId) =>
      fetchDelete(`${articlesUrl}/${articleId}`),
    );

    await Promise.all(deletePromises);
  };

  const handleDeleteSelectedClick = async () => {
    await deleteSelectedArticles();
    setSelectedArticlesIds([]);
    refetch();
  };

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
    <div className="space-y-6 sm:space-y-14">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.myArticles.title",
            defaultMessage: "My articles",
          })}
        </Heading>
        <CustomLink href={AdminUrl.createArticle} style="primary">
          {intl.formatMessage({
            id: "containers.myArticles.button.createNewArticle",
            defaultMessage: "Create New Article",
          })}
        </CustomLink>
        {selectedArticlesIds.length ? (
          <button
            className="flex gap-2 text-red-500"
            onClick={handleDeleteSelectedClick}
          >
            <TrashIcon className="w-5" />
            {intl.formatMessage({
              id: "containers.myArticles.button.delete",
              defaultMessage: "Delete Selected Articles",
            })}
          </button>
        ) : null}
      </div>
      <MyArticlesTable
        articles={sortedArticles}
        selectedArticlesIds={selectedArticlesIds}
        setSelectedArticlesIds={setSelectedArticlesIds}
        refetch={refetch}
      />
    </div>
  );
}
