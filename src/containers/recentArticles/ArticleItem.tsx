"use client";

import type { ArticleT } from "@/types/types";

import React from "react";
import { useIntl } from "react-intl";

import { imagesUrl } from "@/config/router";

import { useGet } from "@/hooks/api";

import Loader from "@/components/Loader";

import ArticleItemComponent from "./ArticleItemComponent";

type Props = {
  article: ArticleT;
};

export default function ArticleItem({ article }: Props) {
  const intl = useIntl();

  const { response, data, loading, error } = useGet<Blob>(
    `${imagesUrl}/${article.imageId}`,
    { responseType: "blob" },
  );

  let blobURL;

  if (data && response) {
    const blob = new Blob([response.data], {
      type: response.headers["content-type"] as string,
    });

    blobURL = URL.createObjectURL(blob);
  }
  if (loading) {
    return <Loader />;
  }

  if (error || !blobURL) {
    return intl.formatMessage({
      id: "containers.recentArticles.articleItem.blobNotFound",
      defaultMessage: "Blob not found",
    });
  }

  return <ArticleItemComponent article={article} blobURL={blobURL} />;
}
