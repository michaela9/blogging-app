"use client";

import type { Metadata } from "next";

import axios from "axios";
import { useEffect, useState } from "react";

import ArticleDetail from "@/containers/ArticleDetail";

import type { Article} from "@/data/dummy";
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
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await axios.get<Article>(
          `https://fullstack.exercise.applifting.cz/articles/${id}`,
          {
            headers: {
              "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
            },
          },
        );

        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    void getApiData();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return <ArticleDetail article={article} relatedArticles={articles} />;
}
