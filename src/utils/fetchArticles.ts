import type { ArticleT, PaginationT } from "@/types/types";

import { articlesEndpoint } from "@/config/router";

export async function fetchArticles(): Promise<{
  pagination: PaginationT;
  items: ArticleT[];
}> {
  const headers = {
    "Content-Type": "application/json",
    "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
  };

  const response = await fetch(articlesEndpoint, {
    headers: headers,
    next: { revalidate: 0 },
  });

  const result = await response.json();
  return result;
}
