"use client";

import type { ArticleT } from "@/types/types";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import { AppUrl, articlesEndpoint } from "@/config/router";

import { useDelete } from "@/hooks/api";

import CustomLink from "@/components/CustomLink";
import HeaderWrapper from "@/components/HeaderWrapper";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

import MyArticlesTable from "./MyArticlesTable";

type Props = {
  myArticles: ArticleT[];
};

export default function MyArticles({ myArticles }: Props) {
  const t = useTranslations("MyArticles");
  const te = useTranslations("ErrorMessages");
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
    return te("errorDeletingArticles", { errorMessage: deleteError.message });
  }

  return (
    <div className="space-y-6 sm:space-y-14">
      <HeaderWrapper>
        <Heading headingLevel="h1" size="s1">
          {t("title")}
        </Heading>
        <CustomLink href={AppUrl.createArticle} style="primary">
          {t("createNewArticle")}
        </CustomLink>
        {selectedArticlesIds.length ? (
          <button
            className="flex gap-2 text-red-500"
            onClick={handleDeleteSelectedClick}
          >
            <TrashIcon className="w-5" /> {t("deleteSelectedArticles")}
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
