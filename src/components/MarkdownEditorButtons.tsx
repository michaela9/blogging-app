import React from "react";
import { useIntl } from "react-intl";

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
  const intl = useIntl();

  return (
    <div className="flex gap-2 flex-wrap">
      <Button style="markdown" onClick={onBold}>
        {intl.formatMessage({
          id: "components.markdownEditorButtons.bold",
          defaultMessage: "Bold",
        })}
      </Button>
      <Button style="markdown" onClick={onItalic}>
        {intl.formatMessage({
          id: "components.markdownEditorButtons.italic",
          defaultMessage: "Italic",
        })}
      </Button>
      <Button style="markdown" onClick={onHeading1}>
        {intl.formatMessage({
          id: "components.markdownEditorButtons.heading1",
          defaultMessage: "Heading1",
        })}
      </Button>
      <Button style="markdown" onClick={onHeading2}>
        {intl.formatMessage({
          id: "components.markdownEditorButtons.heading2",
          defaultMessage: "Heading2",
        })}
      </Button>
      <Button style="markdown" onClick={onHeading3}>
        {intl.formatMessage({
          id: "components.markdownEditorButtons.heading3",
          defaultMessage: "Heading3",
        })}
      </Button>
    </div>
  );
};

export default MarkdownEditorButtons;
