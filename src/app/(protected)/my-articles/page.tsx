import type { Metadata } from "next";

import { fetchArticles } from "@/utils/fetchArticles";
import { sortArticles } from "@/utils/sortArticles";

import MyArticles from "@/containers/myArticles/MyArticles";

export const metadata: Metadata = {
  title: "Admin - My Articles",
};

export default async function Page() {
  const data = await fetchArticles();
  const articles = data.items;
  const sortedArticles = sortArticles(articles);

  const isDataEmpty =
    !Array.isArray(articles) || articles.length < 1 || !articles;
  return (
    <div>
      {isDataEmpty && <p>Ooops, there are no articles</p>}
      {!isDataEmpty && <MyArticles myArticles={sortedArticles} />}
    </div>
  );
}
