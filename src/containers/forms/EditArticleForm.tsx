import type { ArticleDetailT } from "@/types/types";

import React, { useEffect } from "react";
import { useIntl } from "react-intl";

import useEditArticle from "@/hooks/useEditArticle";

import { Input } from "@/components/form/input";
import MarkdownEditorField from "@/components/form/MarkdownEditor";
import TextArea from "@/components/form/TextArea";
import Loader from "@/components/Loader";

import EditArticleFormHeader from "./EditArticleFormHeader";
import EditArticleImageUpload from "./EditArticleImageUpload";

type Props = {
  blobURL: string;
  article: ArticleDetailT;
};

export default function EditArticleForm({ blobURL, article }: Props) {
  const intl = useIntl();

  const {
    imageLoading,
    articleLoading,
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
  } = useEditArticle(article);

  useEffect(() => {
    setCurrentImage(blobURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blobURL]);

  if (imageLoading || articleLoading || isSubmitting) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
      <EditArticleFormHeader isSubmitting={isSubmitting} />
      <Input
        type="text"
        name="title"
        label={intl.formatMessage({
          id: "containers.forms.editArticleFormInside.articleTitle",
          defaultMessage: "Article Title",
        })}
        register={register}
        defaultValue={article.title}
        error={errors.title}
        placeholder="Article Title"
      />
      <TextArea
        name="perex"
        label={intl.formatMessage({
          id: "containers.forms.editArticleFormInside.perex",
          defaultMessage: "Perex",
        })}
        register={register}
        placeholder="Perex"
        defaultValue={article.perex}
        error={errors.perex}
      />
      <EditArticleImageUpload
        currentImage={currentImage}
        handleFileChange={handleFileChange}
        article={article}
        register={register}
        errors={errors}
      />
      <MarkdownEditorField
        name="content"
        label={intl.formatMessage({
          id: "containers.forms.editArticleFormInside.content",
          defaultMessage: "Content",
        })}
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
