"use client";

import type { ArticleDetailT, ArticleT } from "@/types/types";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import { imagesEndpoint } from "@/config/router";

import { useGet } from "@/hooks/api";

import Description from "@/components/Description";
import Heading from "@/components/Heading";
import { IntlDate } from "@/components/IntlDate";
import Loader from "@/components/Loader";
import Markdown from "@/components/Markdown";

import RelatedArticles from "./RelatedArticles";
import Comments from "../comments/Comments";

type Props = {
  article: ArticleDetailT;
  relatedArticles: ArticleT[];
};

export default function ArticleDetailComponent({
  article,
  relatedArticles,
}: Props) {
  const t = useTranslations("ArticleDetail");
  const te = useTranslations("ErrorMessages");

  const { response, data, loading, error } = useGet<Blob>(
    `${imagesEndpoint}/${article.imageId}`,
    { responseType: "blob" },
  );

  let blobURL;

  if (loading) {
    return <Loader />;
  }

  if (data && response) {
    const blob = new Blob([response.data], {
      type: response.headers["content-type"] as string,
    });

    blobURL = URL.createObjectURL(blob);
  }

  if (error || !blobURL) {
    return te("noBlobFound");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr]">
      <div className="space-y-2 md:space-y-6 pr-6 border-b border-b-gray-300 pb-6 mb-6 md:mb-0 md:pb-0 md:border-none">
        <Heading headingLevel="h1" size="s1">
          {article.title}
        </Heading>
        <div className="space-y-2 md:space-y-6 border-b border-l-gray-300 mb-6 md:mb-0 border-b-gray-300 pb-6">
          <div className="text-secondary-text text-xs flex gap-4">
            <Description>
              <IntlDate date={new Date(article.createdAt)} />
            </Description>
          </div>
          <div>
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
      <div className="md:pl-6 md:border-l md:border-l-gray-300 space-y-4 md:space-y-8">
        <Heading headingLevel="h2" size="s3">
          {t("relatedArticles")}
        </Heading>
        <RelatedArticles relatedArticles={relatedArticles} />
      </div>
    </div>
  );
}
