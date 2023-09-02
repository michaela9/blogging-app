import { useTranslations } from "next-intl";
import React from "react";

import Button from "./Button";

type MarkdownButtonsProps = {
  onBold: () => void;
  onItalic: () => void;
  onHeading1: () => void;
  onHeading2: () => void;
  onHeading3: () => void;
};

const MarkdownEditorButtons: React.FC<MarkdownButtonsProps> = ({
  onBold,
  onItalic,
  onHeading1,
  onHeading2,
  onHeading3,
}) => {
  const t = useTranslations("MarkdownEditorButtons");

  return (
    <div className="flex gap-2 flex-wrap">
      <Button style="markdown" onClick={onBold}>
        {t("bold")}
      </Button>
      <Button style="markdown" onClick={onItalic}>
        {t("italic")}
      </Button>
      <Button style="markdown" onClick={onHeading1}>
        {t("heading1")}
      </Button>
      <Button style="markdown" onClick={onHeading2}>
        {t("heading2")}
      </Button>
      <Button style="markdown" onClick={onHeading3}>
        {t("heading3")}
      </Button>
    </div>
  );
};

export default MarkdownEditorButtons;
