"use client";

import type { ArticleDetailT } from "@/types/types";

import { useTranslations } from "next-intl";

import { articlesEndpoint } from "@/config/router";

import { useGet } from "@/hooks/api";

import Loader from "@/components/Loader";

import EditArticleBlob from "./EditArticleBlob";

type Props = {
  id: string;
};
export default function EditArticle({ id }: Props) {
  const t = useTranslations("ErrorMessages");

  const { data, loading, error } = useGet<ArticleDetailT>(
    `${articlesEndpoint}/${id}`,
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return t("errorLoadingArticles", { errorMessage: error.message });
  }

  if (!data) {
    return t("noArticleFound");
  }

  return <EditArticleBlob article={data} />;
}
