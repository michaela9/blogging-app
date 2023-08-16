"use client";

import type { ArticleDetailT } from "@/types/types";

import { useIntl } from "react-intl";

import { articlesEndpoint } from "@/config/router";

import { useGet } from "@/hooks/api";

import ErrorMessage from "@/components/ErrorMessage";
import Loader from "@/components/Loader";

import EditArticleBlob from "./EditArticleBlob";

type Props = {
  id: string;
};
export default function EditArticle({ id }: Props) {
  const intl = useIntl();

  const { data, loading, error } = useGet<ArticleDetailT>(
    `${articlesEndpoint}/${id}`,
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={intl.formatMessage(
          {
            id: "containers.editArticle.errorMessage",
            defaultMessage: "Error loading article: {error_message}",
          },
          { error_message: error.message },
        )}
      />
    );
  }

  if (!data) {
    return (
      <ErrorMessage
        message={intl.formatMessage({
          id: "containers.editArticle.noArticleFound",
          defaultMessage: "No article found.",
        })}
      />
    );
  }

  return <EditArticleBlob article={data} />;
}
