import type { AxiosError } from "axios";
import type { SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { AdminUrl, articlesUrl, imagesUrl } from "@/config/router";

import type * as zodSchema from "@/schema/zodSchema";
import { createArticleSchema } from "@/schema/zodSchema";

import { usePost } from "./api";

type ImageResponseT = {
  imageId: string;
}[];

type ArticleResponseT = {
  articleId?: string;
  message?: string;
};

export default function useCreateArticle() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    register,
  } = useForm<zodSchema.CreateArticleSchemaT>({
    resolver: zodResolver(createArticleSchema),
  });

  const {
    loading: imageLoading,
    error: imageError,
    fetchPost: fetchImage,
  } = usePost<ImageResponseT, any>(imagesUrl, "multipart/form-data");

  const {
    loading: articleLoading,
    error: articleError,
    fetchPost: fetchArticle,
  } = usePost<ArticleResponseT, zodSchema.CreateArticleSchemaT>(articlesUrl);

  const onSubmit: SubmitHandler<zodSchema.CreateArticleSchemaT> = async (
    formData,
  ) => {
    setIsLoading(true);
    let formDataT = new FormData();
    formDataT.append("image", formData.image[0]);
    formDataT = { ...formDataT, image: formData.image[0] };

    const imageData = await fetchImage(formDataT);

    if (!imageData || imageError) {
      setError(error as AxiosError);
    }
    const imageId = imageData[0].imageId as string;

    const articleData = await fetchArticle({
      title: formData.title,
      content: formData.content,
      perex: formData.perex,
      imageId: imageId,
    });

    if (!articleData || articleError) {
      setError(error as AxiosError);
    }

    router.push(AdminUrl.home);
  };

  return {
    imageLoading,
    articleLoading,
    control,
    handleSubmit,
    register,
    errors,
    setValue,
    getValues,
    onSubmit,
    isLoading,
  };
}
