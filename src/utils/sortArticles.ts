import type { ArticleT } from "@/types/types";

export function sortArticles(articles: ArticleT[]) {
  return articles.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
