import { useTranslations } from "next-intl";
import React from "react";

import Button from "@/components/Button";
import HeaderWrapper from "@/components/HeaderWrapper";
import Heading from "@/components/Heading";

type Props = {
  isSubmitting: boolean;
};
export default function CreateArticleFormHeader({ isSubmitting }: Props) {
  const t = useTranslations("CreateArticleFormHeader");

  return (
    <HeaderWrapper>
      <Heading headingLevel="h1" size="s1">
        {t("createArticle")}
      </Heading>
      <Button style="primary" type="submit" disabled={isSubmitting}>
        {t("publishArticle")}
      </Button>
    </HeaderWrapper>
  );
}
