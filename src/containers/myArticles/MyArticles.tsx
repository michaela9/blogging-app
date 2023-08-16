"use client";

import type { ArticleT, PaginationT } from "@/types/types";

import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import { AppUrl, articlesEndpoint } from "@/config/router";

import { useDelete, useGet } from "@/hooks/api";
import { sortArticles } from "@/utils/sortArticles";

import CustomLink from "@/components/CustomLink";
import ErrorMessage from "@/components/ErrorMessage";
import HeaderWrapper from "@/components/HeaderWrapper";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

import MyArticlesTable from "./MyArticlesTable";

export default function MyArticles() {
  const intl = useIntl();
  const [selectedArticlesIds, setSelectedArticlesIds] = useState<string[]>([]);

  const { data, loading, error, refetch } = useGet<{
    pagination: PaginationT;
    items: ArticleT[];
  }>(articlesEndpoint);

  const {
    loading: deleteLoading,
    error: deleteError,
    fetchDelete,
  } = useDelete<{
    articleId: string;
  }>();

  if (loading || deleteLoading) {
    return <Loader />;
  }

  const deleteSelectedArticles = async () => {
    const deletePromises = selectedArticlesIds.map((articleId) =>
      fetchDelete(`${articlesEndpoint}/${articleId}`),
    );

    await Promise.all(deletePromises);
  };

  const handleDeleteSelectedClick = async () => {
    await deleteSelectedArticles();
    setSelectedArticlesIds([]);
    refetch();
  };

  if (deleteError) {
    return (
      <ErrorMessage
        message={intl.formatMessage(
          {
            id: "containers.myArticles.errorMessage",
            defaultMessage: "Error deleting articles: {error_message}",
          },
          { error_message: deleteError.message },
        )}
      />
    );
  }

  if (error) {
    return (
      <ErrorMessage
        message={intl.formatMessage(
          {
            id: "containers.myArticles.errorMessage",
            defaultMessage: "Error loading articles: {error_message}",
          },
          { error_message: error.message },
        )}
      />
    );
  }

  if (!data || data.items.length === 0) {
    return (
      <ErrorMessage
        message={intl.formatMessage({
          id: "containers.myArticles.noArticlesFound",
          defaultMessage: "No articles found.",
        })}
      />
    );
  }

  const articles = data.items;
  const sortedArticles = sortArticles(articles);

  return (
    <div className="space-y-6 sm:space-y-14">
      <HeaderWrapper>
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.myArticles.title",
            defaultMessage: "My articles",
          })}
        </Heading>
        <CustomLink href={AppUrl.createArticle} style="primary">
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
      </HeaderWrapper>
      <MyArticlesTable
        articles={sortedArticles}
        selectedArticlesIds={selectedArticlesIds}
        setSelectedArticlesIds={setSelectedArticlesIds}
        refetch={refetch}
      />
    </div>
  );
}
