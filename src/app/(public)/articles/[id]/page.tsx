"use client";

import type { Metadata } from "next";
import type { ArticleDetailT } from "@/types/types";

import axios from "axios";
import { useEffect, useState } from "react";

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

export default function Page({ params: { id } }: Props) {
  const [article, setArticle] = useState<ArticleDetailT | null>(null);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await axios.get<ArticleDetailT>(
          `${articlesUrl}/${id}`,
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
