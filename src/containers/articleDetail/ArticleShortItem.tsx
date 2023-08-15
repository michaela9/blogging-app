"use client";

import type { ArticleT } from "@/types/types";

import React from "react";

import Heading from "@/components/Heading";
import CustomLink from "@/components/CustomLink";
import { AppUrl } from "@/config/router";

type Props = {
  article: ArticleT;
};

export default function ArticleShortItem({ article }: Props) {
  return (
    <div className="space-y-2">
      <CustomLink href={`${AppUrl.articles}/${article.articleId}`}>
        <Heading headingLevel="h3" size="s4">
          {article.title}
        </Heading>
      </CustomLink>
      <p className="line-clamp-3 text-sm">{article.perex}</p>
    </div>
  );
}
