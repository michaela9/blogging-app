"use client";

import type { Article } from "./RecentArticles";

import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

import CustomLink from "@/components/CustomLink";
import Heading from "@/components/Heading";

type Props = {
  article: Article;
};

const ArticleItem = ({ article }: Props) => {
  const intl = useIntl();
  return (
    <div className="flex gap-6">
      <Image
        src={article.image}
        alt={article.heading}
        className="shrink-0"
        width={272}
        height={244}
      />
      <div className="space-y-5">
        <Heading headingLevel="h2" size="s3">
          {article.heading}
        </Heading>
        <div className="text-secondary-text text-xs flex gap-4">
          <p>{article.author}</p>
          <p>{article.date}</p>
        </div>
        <p>{article.description}</p>
        <div className="text-xs flex gap-4 items-center">
          <CustomLink href={article.link} style="primary">
            {intl.formatMessage({
              id: "containers.ArticleItem.heading",
              defaultMessage: "Read the whole article",
            })}
          </CustomLink>
          <p className="text-secondary-text">
            {intl.formatMessage(
              {
                id: "containers.ArticleItem.heading",
                defaultMessage: "{number_of_comments} comments",
              },
              {
                number_of_comments: article.numberOfComments,
              },
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
