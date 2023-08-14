import { EditArticleSchemaT, editArticleSchema } from "@/schema/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EditArticleFormHeader from "./EditArticleFormHeader";
import FormTextField from "@/components/form/FormTextField";
import FormTextAreaField from "@/components/form/FormTextAreaField";
import { useIntl } from "react-intl";
import FormFileField from "@/components/form/FormFileField";
import MarkdownEditorField from "@/components/form/MarkdownEditorField";
import Image from "next/image";
import { ArticleDetailT, ImageResponseT } from "@/types/types";
import { AxiosError } from "axios";
import { AdminUrl, articlesUrl, imagesUrl } from "@/config/router";
import { AuthContext } from "@/provider/AuthProvider";
import { usePatch, usePost } from "@/hooks/api";
import getBlobFromImageId from "@/utils/getBlobFromImageId";
import { useRouter } from "next/navigation";
import { File } from "buffer";

type Props = {
  blobURL: string;
  article: ArticleDetailT;
};

export default function EditArticleFormInside({ blobURL, article }: Props) {
  const intl = useIntl();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(blobURL);
  const [currentFile, setCurrentFile] = useState();

  const {
    loading: imageLoading,
    error: imageError,
    fetchPost: fetchImage,
  } = usePost<ImageResponseT, any>(imagesUrl, "multipart/form-data");

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
    setIsLoading(true);

    // const formDataT = new FormData();

    // if (currentFile) {
    //   formDataT.append("image", currentFile);
    // }
    // const imageData = await fetchImage(formDataT);
    router.push(AdminUrl.home);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setCurrentFile(file);
    const newBlobURL = URL.createObjectURL(file);
    setCurrentImage(newBlobURL);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
      <EditArticleFormHeader />
      <FormTextField
        name="title"
        label={intl.formatMessage({
          id: "containers.forms.createArticle.articleTitle",
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
          id: "containers.forms.createArticle.perex",
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
            id: "containers.forms.createArticle.image",
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
          id: "containers.forms.createArticle.content",
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
