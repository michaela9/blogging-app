"use client";

import type { ArticleT } from "@/types/types";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import { AppUrl, articlesEndpoint } from "@/config/router";

import { useDelete } from "@/hooks/api";

import CustomLink from "@/components/CustomLink";
import ErrorMessage from "@/components/ErrorMessage";
import HeaderWrapper from "@/components/HeaderWrapper";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

import MyArticlesTable from "./MyArticlesTable";

type Props = {
  myArticles: ArticleT[];
};

export default function MyArticles({ myArticles }: Props) {
  const intl = useIntl();

  const router = useRouter();

  const [selectedArticlesIds, setSelectedArticlesIds] = useState<string[]>([]);

  const {
    loading: deleteLoading,
    error: deleteError,
    fetchDelete,
  } = useDelete<{
    articleId: string;
  }>();

  if (deleteLoading) {
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
    router.refresh();
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
        myArticles={myArticles}
        selectedArticlesIds={selectedArticlesIds}
        setSelectedArticlesIds={setSelectedArticlesIds}
      />
    </div>
  );
}
