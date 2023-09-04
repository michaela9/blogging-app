import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

type Props = {
  isSubmitting: boolean;
};
export default function EditArticleFormHeader({ isSubmitting }: Props) {
  const intl = useIntl();

  return (
    <div className="flex gap-4 items-center">
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "containers.forms.editArticleFormHeader.title",
          defaultMessage: "Edit Article",
        })}{" "}
      </Heading>
      <Button style="primary" type="submit" disabled={isSubmitting}>
        {intl.formatMessage({
          id: "containers.forms.editArticleFormHeader.articleSave",
          defaultMessage: "Save Article",
        })}{" "}
      </Button>
    </div>
  );
}
