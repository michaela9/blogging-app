import { useTranslations } from "next-intl";
import React from "react";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

type Props = {
  isSubmitting: boolean;
};
export default function EditArticleFormHeader({ isSubmitting }: Props) {
  const t = useTranslations("EditArticleFormHeader");

  return (
    <div className="flex gap-4 items-center">
      <Heading headingLevel="h1" size="s1">
        {t("editArticle")}
      </Heading>
      <Button style="primary" type="submit" disabled={isSubmitting}>
        {t("saveArticle")}
      </Button>
    </div>
  );
}
