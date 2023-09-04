import type { Metadata } from "next";

import { fetchArticle } from "@/utils/fetchArticle";
import { fetchArticles } from "@/utils/fetchArticles";
import { sortArticles } from "@/utils/sortArticles";

import ArticleDetail from "@/containers/articleDetail/ArticleDetail";

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
