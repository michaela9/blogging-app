import type { ArticleT } from "@/types/types";
import React from "react";

import { baseUrl } from "@/config/router";

import ArticleItemComponent from "./ArticleItemComponent";

type Props = {
  article: ArticleT;
};

const apiKey = "b21611a3-d995-499c-80d5-4e0f72db5ae1";

const getArticleFileData = async (imageId: string) => {
  const response = await fetch(`${baseUrl}/images/${imageId}`, {
    method: "GET",
    headers: {
      "X-API-KEY": apiKey,
      Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
    },
  });

  if (!response.ok) {
    console.log("no data yet");
  }

  const imageBlob = await response.blob();
  const blobURL = URL.createObjectURL(imageBlob);
  return blobURL;
};

export default async function ArticleItem({ article }: Props) {
  const fileData = await getArticleFileData(article.imageId);

  return <ArticleItemComponent article={article} fileData={fileData} />;
}
