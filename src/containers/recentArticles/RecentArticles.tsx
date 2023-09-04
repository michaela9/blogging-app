import type { ArticleT } from "@/types/types";

import Heading from "@/components/Heading";

import ArticleItem from "./ArticleItem";

type Props = {
  articles: ArticleT[];
};

export default function RecentArticles({ articles }: Props) {
  return (
    <div className="space-y-4 md:space-y-12">
      <Heading headingLevel="h1" size="s1">
        Recent Articles
      </Heading>
      <div className="space-y-10 sm:space-y-8">
        {articles.map((article) => (
          <div key={article.articleId}>
            <ArticleItem article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
