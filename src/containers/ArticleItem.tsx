"use client";

import type { Article } from "./RecentArticles";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Heading from "@/components/Heading";

type Props = {
  article: Article;
};

const ArticleItem = ({ article }: Props) => {
  return (
    <div className="flex gap-6">
      <Image
        src={article.image}
        alt="Cat image"
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
          <Link href={article.link} className="text-primary">
            Read the whole aricle
          </Link>
          <p className="text-secondary-text">
            {article.numberOfComments} comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
