"use client";

import type { SubmitHandler } from "react-hook-form";
import type { ArticleDetailT } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { articlesUrl } from "@/config/router";

import { useGet } from "@/hooks/api";

import Loader from "@/components/Loader";

import type { EditArticleSchemaT } from "@/schema/zodSchema";
import { editArticleSchema } from "@/schema/zodSchema";

import EditArticleForm from "./forms/EditArticleForm";

type Props = {
  id: string;
};
export default function EditArticle({ id }: Props) {
  const { data, loading, error, refetch } = useGet<ArticleDetailT>(
    `${articlesUrl}/${id}`,
  );

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    control,
    setValue,
    getValues,
    watch,
  } = useForm<EditArticleSchemaT>({
    resolver: zodResolver(editArticleSchema),
  });

  const onSubmit: SubmitHandler<EditArticleSchemaT> = async (formData) => {
    // const fetchedData = await fetchPost(formData);
    // console.log(fetchedData);
    // if (error) {
    //   return intl.formatMessage({
    //     id: "containers.recentArticles.errorMessage",
    //     defaultMessage: "Login failed",
    //   });
    // }
    // if (loading || isSubmitting) {
    //   return <Loader />;
    // }
    // if (!fetchedData) {
    //   return intl.formatMessage({
    //     id: "containers.recentArticles.missingData",
    //     defaultMessage: "Missing data",
    //   });
    // }
    // router.push(AdminUrl.home);
  };
  if (!data) {
    return <p>There is no data</p>;
  }

  if (error) {
    return error.message;
  }

  if (loading || isSubmitting) {
    return <Loader />;
  }

  return (
    <EditArticleForm
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      control={control}
      article={data}
      setValue={setValue}
      getValues={getValues}
      watch={watch}
    />
  );
}
