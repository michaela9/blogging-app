"use client";

import type { ArticleDetailT, ArticleT } from "@/types/types";

import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

import { imagesUrl } from "@/config/router";

import { useGet } from "@/hooks/api";

import Description from "@/components/Description";
import Heading from "@/components/Heading";
import { IntlDate } from "@/components/IntlDate";
import Loader from "@/components/Loader";
import Markdown from "@/components/Markdown";

import ArticleShortItem from "./ArticleShortItem";
import Comments from "../comments/Comments";

type Props = {
  article: ArticleDetailT;
  relatedArticles: ArticleT[];
};

export default function ArticleDetailComponent({
  article,
  relatedArticles,
}: Props) {
  const intl = useIntl();
  const { response, data, loading, error } = useGet<Blob>(
    `${imagesUrl}/${article.imageId}`,
    { responseType: "blob" },
  );

  let blobURL;

  if (data && response) {
    const blob = new Blob([response.data], {
      type: response.headers["content-type"] as string,
    });

    blobURL = URL.createObjectURL(blob);
  }

  if (loading) {
    return <Loader />;
  }

  if (error || !blobURL) {
    return intl.formatMessage({
      id: "containers.articleItem.blobNotFound",
      defaultMessage: "Blob not found",
    });
  }

  return (
    <div className="grid grid-cols-[2fr,1fr]">
      <div className="space-y-6 pr-6">
        <Heading headingLevel="h1" size="s1">
          {article.title}
        </Heading>
        <div className="space-y-6 border-b border-b-gray-300 pb-10">
          <div className="text-secondary-text text-xs flex gap-4">
            {/* <Description>{article.author}</Description> */}
            <Description>
              <IntlDate value={article.createdAt} />
              {article.createdAt}
            </Description>
          </div>
          <div className="">
            <Image
              src={blobURL}
              alt={article.title}
              className="shrink-0 object-cover overflow-hidden"
              width={760}
              height={500}
            />
          </div>
          <Markdown>{article.content}</Markdown>
        </div>
        <Comments comments={article.comments} />
      </div>
      <div className="pl-6 border-l border-l-gray-300 space-y-8">
        <Heading headingLevel="h2" size="s3">
          {intl.formatMessage({
            id: "containers.articleDetail.title",
            defaultMessage: "Related articles",
          })}
        </Heading>
        <div className="space-y-6">
          {relatedArticles.map((article) => (
            <ArticleShortItem key={article.articleId} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
