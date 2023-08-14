"use client";

import type { SubmitHandler } from "react-hook-form";
import type { ArticleDetailT } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { articlesUrl, imagesUrl } from "@/config/router";

import { useGet } from "@/hooks/api";

import Loader from "@/components/Loader";

import type { EditArticleSchemaT } from "@/schema/zodSchema";
import { editArticleSchema } from "@/schema/zodSchema";

import EditArticleForm from "./forms/EditArticleForm";
import { useIntl } from "react-intl";
import useGetBlobFromImageId from "../hooks/useGetBlobFromImageId";

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
        id: "containers.recentArticles.errorMessage",
        defaultMessage: "Error loading articles: {error_message}",
      },
      { error_message: error.message },
    );
  }

  if (!data) {
    return intl.formatMessage({
      id: "containers.recentArticles.noArticlesFound",
      defaultMessage: "No articles found.",
    });
  }

  return <EditArticleForm article={data} />;
}
