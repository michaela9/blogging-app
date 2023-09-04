"use client";

import type { ArticleT } from "@/types/types";

import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";
import { PuffLoader } from "react-spinners";

import { AppUrl, imagesEndpoint } from "@/config/router";

import { useGet } from "@/hooks/api";

import CustomLink from "@/components/CustomLink";
import Description from "@/components/Description";
import ErrorMessage from "@/components/ErrorMessage";
import Heading from "@/components/Heading";
import { IntlDate } from "@/components/IntlDate";

import { articleDetail } from "@/data/dummy";

type Props = {
  article: ArticleT;
};

export default function ArticleItem({ article }: Props) {
  const intl = useIntl();

  const { response, data, loading, error } = useGet<Blob>(
    `${imagesEndpoint}/${article.imageId}`,
    { responseType: "blob" },
  );

  let blobURL;

  if (loading) {
    return (
      <div className="h-[244px] w-[272px] bg-gray-100 flex justify-center items-center">
        <PuffLoader color="#2B7EFB" size={35} />
      </div>
    );
  }

  if (data && response) {
    const blob = new Blob([response.data], {
      type: response.headers["content-type"] as string,
    });

    blobURL = URL.createObjectURL(blob);
  }

  if (error) {
    return (
      <ErrorMessage
        message={intl.formatMessage({
          id: "containers.recentArticles.articleItem.blobNotFound",
          defaultMessage: "Blob not found",
        })}
      />
    );
  }

  if (!blobURL) {
    return (
      <div className="h-[244px] w-[272px] bg-gray-100 flex justify-start items-center" />
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <CustomLink
        href={`${AppUrl.articles}/${article.articleId}`}
        className="shrink-0 w-[272px] h-[244px]"
      >
        <Image
          src={blobURL}
          alt={article.title}
          className="shrink-0 w-full h-full object-cover overflow-hidden"
          width={272}
          height={244}
        />
      </CustomLink>
      <div className="space-y-2 md:space-y-4">
        <Heading headingLevel="h2" size="s3">
          {article.title}
        </Heading>
        <div className="text-secondary-text text-xs flex gap-2 md:gap-4 items-center">
          <Description>{articleDetail.comments[0].author}</Description>
          <div className="w-1 h-1 rounded-full bg-middle-gray" />
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
          <Description className="text-secondary-text" size="sm">
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
