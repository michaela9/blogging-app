import { useGet } from "./api";
import type { ArticleT, PaginationT } from "@/types/types";
import { articlesUrl } from "@/config/router";
import { useIntl } from "react-intl";
// import Loader from "@/components/Loader";

export default function useGetArticles() {
  const intl = useIntl();

  const { data, loading, error } = useGet<{
    pagination: PaginationT;
    items: ArticleT[];
  }>(articlesUrl);

  // if (loading) {
  //   return <Loader />
  // }

  // if (error) {
  //   return intl.formatMessage(
  //     {
  //       id: "containers.recentArticles.errorMessage",
  //       defaultMessage: "Error loading articles: {error_message}",
  //     },
  //     { error_message: error.message },
  //   );
  // }

  if (!data) {
    return intl.formatMessage({
      id: "containers.recentArticles.noArticlesFound",
      defaultMessage: "No articles found.",
    });
  }

  const articles: ArticleT[] = data.items;

  const sortedArticles: ArticleT[] = articles.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );

  return { loading, error, articles, sortedArticles };
}
