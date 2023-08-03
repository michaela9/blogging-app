"use client";

import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Description from "@/components/Description";
import Heading from "@/components/Heading";

type Props = {
  articleId: string;
  closeModal: () => void;
};

export default function DeleteArticle({ articleId, closeModal }: Props) {
  const intl = useIntl();

  const deleteArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://fullstack.exercise.applifting.cz/articles/${articleId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
            Authorization: "08709433-7233-476f-9a70-ac1dbf954e87",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      return data;
    } catch (error) {}
  };

  return (
    <div className="space-y-4">
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "containers.forms.deleteArticle.heading",
          defaultMessage: "Delete the article?",
        })}
      </Heading>
      <Description className="text-gray-500">
        {intl.formatMessage({
          id: "containers.forms.deleteArticle.description",
          defaultMessage: "Do you really want to delete the article?",
        })}
      </Description>

      <div className="flex gap-4 items-center">
        <Button style="primary" onClick={() => deleteArticle}>
          {intl.formatMessage({
            id: "containers.forms.deleteArticle.submit",
            defaultMessage: " Yes, please!",
          })}
        </Button>
        <Button style="secondary" onClick={closeModal}>
          {intl.formatMessage({
            id: "containers.forms.deleteArticle.button.close",
            defaultMessage: "No, thanks! ",
          })}
        </Button>
      </div>
    </div>
  );
}
