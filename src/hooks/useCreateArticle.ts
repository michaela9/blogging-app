import type { AxiosError } from "axios";
import type { SubmitHandler } from "react-hook-form";
import type {
  ArticleDetailT,
  CreateArticleT,
  ImageResponseT,
} from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { AppUrl, articlesEndpoint, imagesEndpoint } from "@/config/router";

import type { CreateArticleSchemaT } from "@/schema/zodSchema";
import { createArticleSchema } from "@/schema/zodSchema";

import { usePost } from "./api";

export default function useCreateArticle() {
  const [error, setError] = useState<AxiosError | null>();
  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
    register,
  } = useForm<CreateArticleSchemaT>({
    resolver: zodResolver(createArticleSchema),
  });

  const {
    loading: imageLoading,
    error: imageError,
    fetchPost: fetchImage,
  } = usePost<ImageResponseT, FormData>(imagesEndpoint, "multipart/form-data");

  const {
    loading: articleLoading,
    error: articleError,
    fetchPost: fetchArticle,
  } = usePost<ArticleDetailT, CreateArticleT>(articlesEndpoint);

  const onSubmit: SubmitHandler<CreateArticleSchemaT> = async (formData) => {
    const formDataT = new FormData();
    // eslint-disable-next-line
    formDataT.append("image", formData.image[0]);

    const imageData = await fetchImage(formDataT);
    if (!imageData || imageError) {
      setError(error as AxiosError);
    }
    const imageId =
      imageData &&
      Array.isArray(imageData) &&
      imageData.length > 0 &&
      // eslint-disable-next-line
      (imageData[0].imageId as string);

    if (!imageId) {
      return null;
    }

    const articleData = await fetchArticle({
      title: formData.title,
      content: formData.content,
      perex: formData.perex,
      imageId: imageId,
    });

    if (!articleData || articleError) {
      setError(error as AxiosError);
    }
    router.push(AppUrl.myArticles);
    router.refresh();
  };

  return {
    imageLoading,
    articleLoading,
    handleSubmit,
    register,
    errors,
    setValue,
    getValues,
    onSubmit,
    isSubmitting,
  };
}
