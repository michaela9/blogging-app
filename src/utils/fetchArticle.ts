import { articlesEndpoint } from "@/config/router";

export async function fetchArticle(id: string) {
  const headers = {
    "Content-Type": "application/json",
    "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
  };

  const response = await fetch(`${articlesEndpoint}/${id}`, {
    headers: headers,
    next: { revalidate: 0 },
  });

  const result = await response.json();
  return result;
}
