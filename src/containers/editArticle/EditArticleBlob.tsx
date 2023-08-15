"use client";

import type { ArticleDetailT } from "@/types/types";

import React from "react";

import useGetBlobFromImageId from "@/hooks/useGetBlobFromImageId";

import EditArticleForm from "../forms/EditArticleForm";

type Props = {
  article: ArticleDetailT;
};

export default function EditArticleBlob({ article }: Props) {
  const { blobURL } = useGetBlobFromImageId(article.imageId);

  return (
    <div className="max-w-5xl">
      <EditArticleForm blobURL={blobURL} article={article} />
    </div>
  );
}
