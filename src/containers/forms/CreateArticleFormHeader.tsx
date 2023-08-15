import React from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import HeaderWrapper from "@/components/HeaderWrapper";
import Heading from "@/components/Heading";

export default function CreateArticleFormHeader() {
  const intl = useIntl();

  return (
    <HeaderWrapper>
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "containers.forms.createArticleFormHeader.title",
          defaultMessage: "Create Article",
        })}
      </Heading>
      <Button style="primary" type="submit">
        {intl.formatMessage({
          id: "containers.forms.createArticleFormHeader.articlePublish",
          defaultMessage: "Publish Article",
        })}
      </Button>
    </HeaderWrapper>
  );
}
