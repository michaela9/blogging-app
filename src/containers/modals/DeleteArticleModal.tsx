"use client";

import { useIntl } from "react-intl";

import { articlesEndpoint } from "@/config/router";

import { useDelete } from "@/hooks/api";

import Button from "@/components/Button";
import Description from "@/components/Description";
import ErrorMessage from "@/components/ErrorMessage";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

type Props = {
  articleId: string;
  closeModal: () => void;
  refetch: () => void;
};

export default function DeleteArticleModal({
  articleId,
  closeModal,
  refetch,
}: Props) {
  const intl = useIntl();

  const { loading, error, fetchDelete } = useDelete<{
    articleId: string;
  }>();

  const handleDeleteClick = async () => {
    await fetchDelete(`${articlesEndpoint}/${articleId}`);
    closeModal();
    refetch();
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={intl.formatMessage(
          {
            id: "containers.modals.deleteArticleModal.errorMessage",
            defaultMessage: "Error deleting article: {error_message}",
          },
          { error_message: error.message },
        )}
      />
    );
  }

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.modals.deleteArticleModal.title",
            defaultMessage: "Delete the article",
          })}
        </Heading>
        <Description className="text-gray-500">
          {intl.formatMessage({
            id: "containers.modals.deleteArticleModal.description",
            defaultMessage: "Do you really want to delete the article?",
          })}
        </Description>
      </div>
      <div className="flex gap-4 items-center">
        <Button style="primary" onClick={handleDeleteClick}>
          {intl.formatMessage({
            id: "containers.modals.deleteArticleModal.submit",
            defaultMessage: "Yes, please!",
          })}
        </Button>
        <Button style="secondary" onClick={closeModal}>
          {intl.formatMessage({
            id: "containers.modals.deleteArticleModal.closeButton",
            defaultMessage: "No, thanks!",
          })}
        </Button>
      </div>
    </div>
  );
}
