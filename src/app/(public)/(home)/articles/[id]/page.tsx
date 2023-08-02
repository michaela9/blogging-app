import type { Metadata } from "next";

import ArticleDetail from "@/containers/ArticleDetail";
import { useEffect, useState } from "react";
import { articles } from "@/data/dummy";

export const metadata: Metadata = {
  title: "Homepage",
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: Props) {
  // const [article, setArticle] = useState({
  //   articleId: "",
  //   createdAt: "",
  //   content: "",
  // });

  // const article = await getBlogPost();
  // console.log(article);

  // const getApiData = async () => {
  //   const response = await fetch(
  //     `https://fullstack.exercise.applifting.cz/articles/${id}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
  //       },
  //     },
  //   ).then((response) => response.json());

  //   setArticle(response);
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);
  return <ArticleDetail article={articles[0]} relatedArticles={articles} />;
}
