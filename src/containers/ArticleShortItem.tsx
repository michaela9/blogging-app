import type { Article } from "./RecentArticles";

import React from "react";

import Heading from "@/components/Heading";

type Props = {
  article: Article;
};
const ArticleShortItem = ({ article }: Props) => {
  return (
    <div className="space-y-2">
      <Heading headingLevel="h3" size="s4">
        {article.heading}
      </Heading>
      <p className="line-clamp-3 text-sm">{article.description}</p>
    </div>
  );
};

export default ArticleShortItem;
