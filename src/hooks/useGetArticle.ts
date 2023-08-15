import type { ArticleDetailT } from "@/types/types";

import { articlesEndpoint } from "@/config/router";

import { useGet } from "./api";

export default function useGetArticle(id: string) {
  const { data, loading, error } = useGet<ArticleDetailT>(
    `${articlesEndpoint}/${id}`,
  );

  return { data, loading, error };
}
