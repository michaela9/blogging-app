import type { Metadata } from "next";

import { articlesUrl } from "@/config/router";

import RecentArticles from "@/containers/RecentArticles";
import type { ArticleT, PaginationT } from "@/types/types";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

async function getArticlesData(): Promise<{
  pagination: PaginationT;
  items: ArticleT[];
}> {
  const res = await fetch(articlesUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": "b21611a3-d995-499c-80d5-4e0f72db5ae1",
      Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
    },
  });
  return res.json();
}

export default async function Page() {
  const data = await getArticlesData();
  const articles = data.items;
  console.log(articles);
  return <RecentArticles articles={articles} />;
}
