import type { ReactElement } from "react-markdown/lib/react-markdown";

import { useTranslations } from "next-intl";
import React from "react";

import { AppUrl } from "@/config/router";

import CustomLink from "./CustomLink";

type Props = {
  message: string | ReactElement;
};
export default function ErrorMessage({ message }: Props) {
  const t = useTranslations("ErrorMessages");

  return (
    <div className="py-20 flex items-center justify-center flex-col gap-8">
      <p className="text-red-500">{message}</p>
      <CustomLink href={AppUrl.home} style="primary">
        {t("goToHomepage")}
      </CustomLink>
    </div>
  );
}
