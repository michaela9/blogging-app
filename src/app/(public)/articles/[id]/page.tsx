"use client";

import type { Metadata } from "next";
import type { ArticleDetailT } from "@/types/types";

import axios from "axios";
import { useEffect, useState } from "react";

import { articlesUrl, baseUrl } from "@/config/router";

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

const apiKey = "b21611a3-d995-499c-80d5-4e0f72db5ae1";

export default function Page({ params: { id } }: Props) {
  const [fileData, setFileData] = useState("");
  const [article, setArticle] = useState<ArticleDetailT>({
    articleId: "",
    title: "",
    perex: "",
    imageId: "",
    createdAt: "",
    lastUpdatedAt: "",
    content: "",
    comments: [
      {
        commentId: "",
        articleId: "",
        author: "",
        content: "",
        postedAt: "",
        score: 5,
      },
    ],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get<ArticleDetailT>(`${articlesUrl}/${id}`, {
        headers: {
          "X-API-KEY": apiKey,
        },
      });

      if (response.data) {
        setArticle(response.data);
        fetchImage(response.data.imageId);
      }
    } catch (error) {
      console.error("Error fetching article:", error);
    }
    setLoading(false);
  };

  const fetchImage = async (imageId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/images/${imageId}`, {
        responseType: "blob",
        headers: {
          "X-API-KEY": apiKey,
          Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
        },
      });

      if (response.data) {
        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });

        const blobURL = URL.createObjectURL(blob);
        setFileData(blobURL);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found.</div>;
  }
  console.log(fileData);
  return (
    <ArticleDetail
      article={article}
      fileData={fileData}
      relatedArticles={articles}
    />
  );
}
