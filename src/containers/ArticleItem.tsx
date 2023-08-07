"use client";

import type { ArticleT } from "@/types/types";

import { baseUrl } from "@/config/router";

import ArticleItemComponent from "./ArticleItemComponent";
import React, { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  article: ArticleT;
};

export default function ArticleItem({ article }: Props) {
  const [fileData, setFileData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImage(article.imageId);
  }, [article]);

  const fetchImage = async (imageId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/images/${imageId}`, {
        responseType: "blob",
        headers: {
          "X-API-KEY": "b21611a3-d995-499c-80d5-4e0f72db5ae1",
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

  return <ArticleItemComponent article={article} fileData={fileData} />;
}
