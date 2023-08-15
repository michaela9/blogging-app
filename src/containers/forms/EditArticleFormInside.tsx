import type { AxiosError } from "axios";
import type { SubmitHandler } from "react-hook-form";
import type { ArticleDetailT, ImageResponseT } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";

import { AdminUrl, articlesUrl, imagesUrl } from "@/config/router";

import { usePatch, usePost } from "@/hooks/api";

import FormFileField from "@/components/form/FormFileField";
import FormTextAreaField from "@/components/form/FormTextAreaField";
import FormTextField from "@/components/form/FormTextField";
import MarkdownEditorField from "@/components/form/MarkdownEditorField";

import type { EditArticleSchemaT } from "@/schema/zodSchema";
import { editArticleSchema } from "@/schema/zodSchema";

import EditArticleFormHeader from "./EditArticleFormHeader";
import Loader from "@/components/Loader";

const currentDate = new Date().toISOString();

type Props = {
  blobURL: string;
  article: ArticleDetailT;
};

export default function EditArticleFormInside({ blobURL, article }: Props) {
  const intl = useIntl();
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(blobURL);
  const [currentFiles, setCurrentFiles] = useState<FileList | null>(null);
  const [error, setError] = useState<AxiosError | null>();

  const {
    loading: imageLoading,
    error: imageError,
    fetchPost: fetchImage,
  } = usePost<ImageResponseT, FormData>(imagesUrl, "multipart/form-data");

  const {
    loading: articleLoading,
    error: articleError,
    fetchPatch: patchArticle,
  } = usePatch<ArticleDetailT, ArticleDetailT>(
    `${articlesUrl}/${article.articleId}`,
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

  useEffect(() => {
    setCurrentImage(blobURL);
  }, [blobURL]);

  const onSubmit: SubmitHandler<EditArticleSchemaT> = async (formData) => {
    const formDataT = new FormData();
    if (currentFiles && currentFiles.length) {
      formDataT.append("image", currentFiles[0]);
    }
    const imageData = await fetchImage(formDataT);

    if (isSubmitting) {
      return <Loader />;
    }
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

    if (!imageLoading || articleLoading) {
      return <Loader />;
    }
    if (!articleData || articleError) {
      setError(error as AxiosError);
    }

    router.push(AdminUrl.home);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const files = e.target.files;
    setCurrentFiles(files);
    const newBlobURL = URL.createObjectURL(files[0]);
    setCurrentImage(newBlobURL);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
      <EditArticleFormHeader />
      <FormTextField
        name="title"
        label={intl.formatMessage({
          id: "containers.forms.editArticleFormInside.articleTitle",
          defaultMessage: "Article Title",
        })}
        control={control}
        defaultValue={article.title}
        placeholder="Article Title"
        register={register}
        error={errors.title}
      />
      <FormTextAreaField
        name="perex"
        label={intl.formatMessage({
          id: "containers.forms.editArticleFormInside.perex",
          defaultMessage: "Perex",
        })}
        control={control}
        placeholder="Perex"
        defaultValue={article.perex}
        register={register}
        error={errors.perex}
      />
      <div className="space-y-2">
        {currentImage && (
          <Image
            src={currentImage}
            alt={article.title}
            className="shrink-0 object-cover overflow-hidden w-40 h-40"
            width={150}
            height={150}
          />
        )}
        <FormFileField
          name="image"
          label={intl.formatMessage({
            id: "containers.forms.editArticleFormInside.image",
            defaultMessage: "Featured Image",
          })}
          register={register}
          error={errors.image}
          onChange={handleFileChange}
        />
      </div>
      <MarkdownEditorField
        name="content"
        label={intl.formatMessage({
          id: "containers.forms.editArticleFormInside.content",
          defaultMessage: "Content",
        })}
        control={control}
        defaultValue={article.content}
        placeholder="Content"
        register={register}
        error={errors.content}
        getValues={getValues}
        setValue={setValue}
      />
    </form>
  );
}
