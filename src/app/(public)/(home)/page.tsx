"use client";

import type { Metadata } from "next";
import type { ArticleDetailT } from "@/types/types";

import axios from "axios";
import { useEffect, useState } from "react";

import { articlesUrl } from "@/config/router";

import RecentArticles from "@/containers/RecentArticles";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

const apiKey = "b21611a3-d995-499c-80d5-4e0f72db5ae1";

export default function Page() {
  const [loading, setLoading] = useState(true);

  const [articles, setArticles] = useState<ArticleDetailT[] | null>([
    {
      articleId: "",
      imageId: "",
      title: "",
      perex: "",
      content: "",
      createdAt: "",
      lastUpdatedAt: "",
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
    },
  ]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${articlesUrl}?limit=10&offset=0`, {
        headers: {
          "X-API-KEY": apiKey,
          Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
        },
      });

      setArticles(response.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("articles", articles.items);
  return (
    <div>
      <h1></h1>
      <RecentArticles articles={articles.items} />
    </div>
  );
}
