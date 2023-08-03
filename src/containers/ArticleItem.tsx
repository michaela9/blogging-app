"use client";

import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

import CustomLink from "@/components/CustomLink";
import Description from "@/components/Description";
import Heading from "@/components/Heading";

import type { Article } from "@/data/dummy";

type Props = {
  article: Article;
};

const ArticleItem = ({ article }: Props) => {
  const intl = useIntl();
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Image
        src={article.image}
        alt={article.title}
        className="shrink-0"
        width={272}
        height={244}
      />
      <div className="sm:space-y-5 space-y-3">
        <Heading headingLevel="h2" size="s3">
          {article.title}
        </Heading>
        <div className="text-secondary-text text-xs flex gap-4">
          <Description>{article.author}</Description>
          <Description>{article.createdAt}</Description>
        </div>
        <Description>{article.content}</Description>
        <div className="text-sm flex gap-4 items-center">
          <CustomLink href={`/articles/${article.articleId}`} style="secondary">
            {intl.formatMessage({
              id: "containers.articleItem.title",
              defaultMessage: "Read the whole article",
            })}
          </CustomLink>
          <Description className="text-secondary-text">
            {intl.formatMessage(
              {
                id: "containers.articleItem.numberOfComments",
                defaultMessage: "{number_of_comments} comments",
              },
              {
                number_of_comments: article.numberOfComments,
              },
            )}
          </Description>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
