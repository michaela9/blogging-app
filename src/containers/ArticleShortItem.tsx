import type { ArticleT } from "@/types/types";

import React from "react";

import Heading from "@/components/Heading";

type Props = {
  article: ArticleT;
};

const ArticleShortItem = ({ article }: Props) => {
  return (
    <div className="space-y-2">
      <Heading headingLevel="h3" size="s4">
        {article.title}
      </Heading>
      <p className="line-clamp-3 text-sm">{article.perex}</p>
    </div>
  );
};

export default ArticleShortItem;
