import React from "react";

import Heading from "@/components/Heading";
import type { Article } from "@/data/dummy";

type Props = {
  article: Article;
};

const ArticleShortItem = ({ article }: Props) => {
  return (
    <div className="space-y-2">
      <Heading headingLevel="h3" size="s4">
        {article.title}
      </Heading>
      <p className="line-clamp-3 text-sm">{article.content}</p>
    </div>
  );
};

export default ArticleShortItem;
