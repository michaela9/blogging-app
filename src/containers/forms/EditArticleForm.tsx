"use client";

import type { ArticleDetailT } from "@/types/types";

import React from "react";

import useGetBlobFromImageId from "@/hooks/useGetBlobFromImageId";

import EditArticleFormInside from "./EditArticleFormInside";

type Props = {
  article: ArticleDetailT;
};

export default function EditArticleForm({ article }: Props) {
  const { blobURL } = useGetBlobFromImageId(article.imageId);

  return (
    <div className="max-w-5xl">
      <EditArticleFormInside blobURL={blobURL} article={article} />
    </div>
  );
}
