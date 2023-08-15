"use client";

import type { ArticleT } from "@/types/types";

import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

import { AppUrl } from "@/config/router";

import CustomLink from "@/components/CustomLink";
import Description from "@/components/Description";
import Heading from "@/components/Heading";
import { IntlDate } from "@/components/IntlDate";

import { articleDetail } from "@/data/dummy";

type Props = {
  article: ArticleT;
  blobURL: string;
};

export default function ArticleItemComponent({ article, blobURL }: Props) {
  const intl = useIntl();
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <CustomLink href={`${AppUrl.articles}/${article.articleId}`}>
        <Image
          src={blobURL}
          alt={article.title}
          className="shrink-0"
          width={272}
          height={244}
        />
      </CustomLink>
      <div className="space-y-2 md:space-y-4">
        <Heading headingLevel="h2" size="s3">
          {article.title}
        </Heading>
        <div className="text-secondary-text text-xs flex gap-4">
          <Description>{articleDetail.comments[0].author}</Description>
          <Description>
            <IntlDate value={article.createdAt} />
          </Description>
        </div>
        <Description>{article.perex}</Description>
        <div className="text-sm flex gap-4 items-center">
          <CustomLink href={`/articles/${article.articleId}`} style="secondary">
            {intl.formatMessage({
              id: "containers.articleItemComponent.title",
              defaultMessage: "Read the whole article",
            })}
          </CustomLink>
          <Description className="text-secondary-text">
            {intl.formatMessage(
              {
                id: "containers.articleItemComponent.numberOfComments",
                defaultMessage: "{number_of_comments} comments",
              },
              {
                number_of_comments: articleDetail.comments.length,
              },
            )}
          </Description>
        </div>
      </div>
    </div>
  );
}
