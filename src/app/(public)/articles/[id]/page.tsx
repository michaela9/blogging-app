"use client";

import type { Metadata } from "next";
import type { ArticleDetailT } from "@/types/types";

import axios from "axios";
import { useEffect, useState } from "react";

import { articlesUrl } from "@/config/router";

import ArticleDetail from "@/containers/ArticleDetail";

import { articleDetail, articles } from "@/data/dummy";

export const metadata: Metadata = {
  title: "Homepage",
};

type Props = {
  params: {
    id: string;
  };
};

const apiKey = "b21611a3-d995-499c-80d5-4e0f72db5ae1";

export default function Page({ params: { id } }: Props) {
  const [article, setArticle] = useState<ArticleDetailT | null>(null);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await axios.get<ArticleDetailT>(
          `${articlesUrl}/${id}`,
          {
            headers: {
              "X-API-KEY": apiKey,
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

  return <ArticleDetail article={articleDetail} relatedArticles={articles} />;
}
