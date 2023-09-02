"use client";

import { useTranslations } from "next-intl";

import { articlesEndpoint } from "@/config/router";

import { useDelete } from "@/hooks/api";

import Button from "@/components/Button";
import Description from "@/components/Description";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

type Props = {
  articleId: string;
  closeModal: () => void;
};

export default function DeleteArticleModal({ articleId, closeModal }: Props) {
  const t = useTranslations("DeleteArticleModal");
  const te = useTranslations("ErrorMessages");
  const router = useRouter();

  const { loading, error, fetchDelete } = useDelete<{
    articleId: string;
  }>();

  const handleDeleteClick = async () => {
    await fetchDelete(`${articlesEndpoint}/${articleId}`);
    closeModal();
    router.refresh();
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return te("errorDeletingArticles", { errorMessage: error.message });
  }

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <Heading headingLevel="h1" size="s1">
          {t("title")}
        </Heading>
        <Description className="text-gray-500">{t("confirmation")}</Description>
      </div>
      <div className="flex gap-4 items-center">
        <Button style="primary" onClick={handleDeleteClick}>
          {t("submit")}
        </Button>
        <Button style="secondary" onClick={closeModal}>
          {t("reject")}
        </Button>
      </div>
    </div>
  );
}
