import React from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function CreateArticleFormHeader() {
  const intl = useIntl();

  return (
    <div className="flex gap-4 items-center">
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "containers.forms.createArticle.title",
          defaultMessage: "Create Article",
        })}
      </Heading>
      <Button style="primary" type="submit">
        {intl.formatMessage({
          id: "containers.forms.createArticle.articlePublish",
          defaultMessage: "Publish Article",
        })}
      </Button>
    </div>
  );
}
