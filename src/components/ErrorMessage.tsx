import React from "react";
import { useIntl } from "react-intl";

import { AppUrl } from "@/config/router";

import CustomLink from "./CustomLink";

type Props = {
  message: string;
};
export default function ErrorMessage({ message }: Props) {
  const intl = useIntl();

  return (
    <div className="py-20 flex items-center justify-center flex-col gap-8">
      <p className="text-red-500">{message}</p>
      <CustomLink href={AppUrl.home} style="primary">
        {intl.formatMessage({
          id: "components.errorMessage.goToHomepage",
          defaultMessage: "Go to Homepage.",
        })}
      </CustomLink>
    </div>
  );
}
