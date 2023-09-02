"use client";

import type { ArticleT } from "@/types/types";

import { useTranslations } from "next-intl";
import React from "react";

import { imagesEndpoint } from "@/config/router";

import { useGet } from "@/hooks/api";

import ErrorMessage from "@/components/ErrorMessage";
import Loader from "@/components/Loader";

import ArticleItemComponent from "./ArticleItemComponent";

type Props = {
  article: ArticleT;
};

export default function ArticleItem({ article }: Props) {
  const t = useTranslations("ErrorMessages");

  const { response, data, loading, error } = useGet<Blob>(
    `${imagesEndpoint}/${article.imageId}`,
    { responseType: "blob" },
  );

  let blobURL;

  if (loading) {
    return <Loader />;
  }

  if (data && response) {
    const blob = new Blob([response.data], {
      type: response.headers["content-type"] as string,
    });

    blobURL = URL.createObjectURL(blob);
  }

  if (error || !blobURL) {
    return <ErrorMessage message={t("blobNotFound")} />;
  }

  return <ArticleItemComponent article={article} blobURL={blobURL} />;
}
