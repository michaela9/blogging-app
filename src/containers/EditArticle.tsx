"use client";

import type { ArticleDetailT } from "@/types/types";

import { useIntl } from "react-intl";

import { articlesUrl } from "@/config/router";

import { useGet } from "@/hooks/api";

import Loader from "@/components/Loader";

import EditArticleForm from "./forms/EditArticleForm";

type Props = {
  id: string;
};
export default function EditArticle({ id }: Props) {
  const intl = useIntl();

  const { data, loading, error, refetch } = useGet<ArticleDetailT>(
    `${articlesUrl}/${id}`,
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return intl.formatMessage(
      {
        id: "containers.editArticle.errorMessage",
        defaultMessage: "Error loading article: {error_message}",
      },
      { error_message: error.message },
    );
  }

  if (!data) {
    return intl.formatMessage({
      id: "containers.editArticle.noArticleFound",
      defaultMessage: "No article found.",
    });
  }

  return <EditArticleForm article={data} />;
}
