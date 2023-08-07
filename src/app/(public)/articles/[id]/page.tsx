import type { Metadata } from "next";

import { articlesUrl } from "@/config/router";

import ArticleDetail from "@/containers/ArticleDetail";

import { articles } from "@/data/dummy";
import type { ArticleDetailT } from "@/types/types";

export const metadata: Metadata = {
  title: "Homepage",
};

type Props = {
  params: {
    id: string;
  };
};

const apiKey = "b21611a3-d995-499c-80d5-4e0f72db5ae1";

const getArticleDetailData = async (id: string): Promise<ArticleDetailT> => {
  const data = await fetch(`${articlesUrl}/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": apiKey,
    },
  });
  const article = await data.json();

  return article;
};

// async function getArticleFileData(imageId: string) {
//   try {
//     const response = await fetch(`${articlesUrl}/images/${imageId}`, {
//       method: "GET",
//       headers: {
//         "X-API-KEY": apiKey,
//         Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
//       },
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
