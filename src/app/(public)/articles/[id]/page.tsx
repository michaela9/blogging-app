import type { Metadata } from "next";

import ArticleDetail from "@/containers/articleDetail/ArticleDetail";
import { fetchArticle } from "@/utils/getArticle";
import { fetchArticles } from "@/utils/getArticles";
import { sortArticles } from "@/utils/sortArticles";

export const metadata: Metadata = {
  title: "Homepage articArticle Detail",
};

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Props) {
  const article = await fetchArticle(id);

  const data = await fetchArticles();

  const articles = data.items;
  const sortedArticles = sortArticles(articles);

  return <ArticleDetail article={article} relatedArticles={sortedArticles} />;
}
