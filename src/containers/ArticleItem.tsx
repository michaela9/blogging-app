"use client";

import type { ArticleT } from "@/types/types";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";

import { baseUrl } from "@/config/router";

import CustomLink from "@/components/CustomLink";
import Description from "@/components/Description";
import Heading from "@/components/Heading";
import { IntlDate } from "@/components/IntlDate";

type Props = {
  article: ArticleT;
};

const apiKey = "b21611a3-d995-499c-80d5-4e0f72db5ae1";

const ArticleItem = ({ article }: Props) => {
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState("");

  useEffect(() => {
    fetchImage();
  }, [article.imageId]);

  const fetchImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/images/${article.imageId}`, {
        responseType: "blob",
        headers: {
          "X-API-KEY": apiKey,
          Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
        },
      });

      if (!response.data) {
        console.log("no data yet");
      }
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

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Image
        src={fileData}
        alt={article.title}
        className="shrink-0"
        width={272}
        height={244}
      />
      <div className="space-y-2 md:space-y-4">
        <Heading headingLevel="h2" size="s3">
          {article.title}
        </Heading>
        <div className="text-secondary-text text-xs flex gap-4">
          {/* <Description>{article.author}</Description> */}
          <Description>
            <IntlDate value={article.createdAt} />
          </Description>
        </div>
        <Description>{article.perex}</Description>
        <div className="text-sm flex gap-4 items-center">
          <CustomLink href={`/articles/${article.articleId}`} style="secondary">
            {intl.formatMessage({
              id: "containers.articleItem.title",
              defaultMessage: "Read the whole article",
            })}
          </CustomLink>
          <Description className="text-secondary-text">
            {/* {intl.formatMessage(
              {
                id: "containers.articleItem.numberOfComments",
                defaultMessage: "{number_of_comments} comments",
              },
              {
                number_of_comments: article.comments.length,
              },
            )} */}
          </Description>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
