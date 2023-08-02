"use client";

import type { Metadata } from "next";

import ArticleDetail from "@/containers/ArticleDetail";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Homepage",
};

type Props = {
  params: {
    id: string;
  };
};

// const id = "559f5189-00ee-4106-8a6f-b9144cfbef93";

// const getBlogPost = async () => {
//   const data = await fetch(
//     `https://fullstack.exercise.applifting.cz/articles/${id}`,
//   );
//   return data.json();
// };

export default function Page({ params: { id } }: Props) {
  const [article, setArticle] = useState({
    articleId: "",
    createdAt: "",
    content: "",
  });

  // const article = await getBlogPost();
  // console.log(article);

  const getApiData = async () => {
    const response = await fetch(
      `https://fullstack.exercise.applifting.cz/articles/${id}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
        },
      },
    ).then((response) => response.json());

    setArticle(response);
  };

  useEffect(() => {
    getApiData();
  }, []);
  console.log(article);

  return <ArticleDetail id={id} article={article} />;
}
