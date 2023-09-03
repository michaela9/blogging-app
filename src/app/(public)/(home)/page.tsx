import type { Metadata } from "next";
import type { ArticleT } from "@/types/types";

import { fetchArticles } from "@/utils/fetchArticles";
import { sortArticles } from "@/utils/sortArticles";

import RecentArticles from "@/containers/recentArticles/RecentArticles";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

export default async function Home() {
  const data = await fetchArticles();
  const articles: ArticleT[] = data.items;
  const sortedArticles = sortArticles(articles);

  const isDataEmpty =
    !Array.isArray(articles) || articles.length < 1 || !articles;
  return (
    <div>
      {isDataEmpty && <p>Ooops, there are no articles</p>}
      {!isDataEmpty && <RecentArticles articles={sortedArticles} />}
    </div>
  );
}
