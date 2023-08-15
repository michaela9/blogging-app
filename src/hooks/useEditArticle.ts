import type { AxiosError } from "axios";
import type React from "react";
import type { SubmitHandler } from "react-hook-form";
import type { ArticleDetailT, ImageResponseT } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { AppUrl, articlesEndpoint, imagesEndpoint } from "@/config/router";

import type { EditArticleSchemaT } from "@/schema/zodSchema";
import { editArticleSchema } from "@/schema/zodSchema";

import { usePatch, usePost } from "./api";
import useGetBlobFromImageId from "./useGetBlobFromImageId";

const currentDate = new Date().toISOString();

export default function useEditArticle(article: ArticleDetailT) {
  const router = useRouter();
  const [currentFiles, setCurrentFiles] = useState<FileList | null>(null);
  const [error, setError] = useState<AxiosError | null>();
  const { blobURL } = useGetBlobFromImageId(article.imageId);

  const [currentImage, setCurrentImage] = useState(blobURL);

  const {
    loading: imageLoading,
    error: imageError,
    fetchPost: fetchImage,
  } = usePost<ImageResponseT, FormData>(imagesEndpoint, "multipart/form-data");

  const {
    loading: articleLoading,
    error: articleError,
    fetchPatch: patchArticle,
  } = usePatch<ArticleDetailT, ArticleDetailT>(
    `${articlesEndpoint}/${article.articleId}`,
  );

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    control,
    setValue,
    getValues,
  } = useForm<EditArticleSchemaT>({
    resolver: zodResolver(editArticleSchema),
  });

  const onSubmit: SubmitHandler<EditArticleSchemaT> = async (formData) => {
    const formDataT = new FormData();
    if (currentFiles && currentFiles.length) {
      formDataT.append("image", currentFiles[0]);
    }
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
    const articleData = await patchArticle({
      articleId: article.articleId,
      createdAt: article.createdAt,
      comments: article.comments,
      lastUpdatedAt: currentDate,
      title: formData.title,
      content: formData.content,
      perex: formData.perex,
      imageId: imageId,
    });

    if (!articleData || articleError) {
      setError(error as AxiosError);
    }

    router.push(AppUrl.myArticles);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files || e.target.files.length === 0) return;
    const files = e.target.files;
    setCurrentFiles(files);
    const newBlobURL = URL.createObjectURL(files[0]);
    setCurrentImage(newBlobURL);
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
    isSubmitting,
    handleFileChange,
    currentImage,
    setCurrentImage,
  };
}
