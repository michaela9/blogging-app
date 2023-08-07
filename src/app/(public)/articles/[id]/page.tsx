import type { Metadata } from "next";
import type { ArticleDetailT } from "@/types/types";

import { articlesUrl } from "@/config/router";

import ArticleDetail from "@/containers/ArticleDetail";

import { articles } from "@/data/dummy";

export const metadata: Metadata = {
  title: "Homepage",
};

type Props = {
  params: {
    id: string;
  };
};

const getArticleDetailData = async (id: string): Promise<ArticleDetailT> => {
  const data = await fetch(`${articlesUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "b21611a3-d995-499c-80d5-4e0f72db5ae1",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const article = await data.json();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return article;
};

// async function getArticleFileData(imageId: string) {
//   try {
//     const response = await fetch(`${articlesUrl}/images/${imageId}`, {
//       method: "GET",
// headers: {
//   "X-API-KEY": process.env.APP_API_KEY,
//   Authorization: process.env.APP_TOKEN,
// },
//     });

//     if (response.ok) {
//       const blob = await response.blob();
//       const blobURL = URL.createObjectURL(blob);
//       return blobURL;
//     } else {
//       console.error("Error fetching image:", response.statusText);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching image:", error);
//     return null;
//   }
// }

export default async function Page({ params: { id } }: Props) {
  const article = await getArticleDetailData(id);
  // let fileData = "";

  // if (article) {
  //   fileData = await getArticleFileData(article.imageId);
  // }

  return (
    <ArticleDetail
      article={article}
      // fileData={fileData}
      relatedArticles={articles}
    />
  );
}
