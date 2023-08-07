"use client";

import type { ArticleDetailT, ArticleT } from "@/types/types";

import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

import Description from "@/components/Description";
import Heading from "@/components/Heading";

import ArticleShortItem from "./ArticleShortItem";
import Comments from "./Comments";

type Props = {
  article: ArticleDetailT;
  relatedArticles: ArticleT[];
  fileData: string;
};

const ArticleDetail = ({ article, relatedArticles, fileData }: Props) => {
  console.log(fileData);
  const intl = useIntl();
  return (
    <div className="grid grid-cols-[2fr,1fr]">
      <div className="space-y-6 pr-6">
        <Heading headingLevel="h1" size="s1">
          {article.title} - {article.articleId}
        </Heading>
        <div className="space-y-6 border-b border-b-gray-300 pb-10">
          <div className="text-secondary-text text-xs flex gap-4">
            {/* <Description>{article.author}</Description> */}
            <Description>{article.createdAt}</Description>
          </div>
          <div className="">
            <Image
              src={fileData}
              alt={article.title}
              className="shrink-0 object-cover overflow-hidden"
              width={760}
              height={500}
            />
          </div>
          <Description>{article.content}</Description>
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
};

export default ArticleDetail;
