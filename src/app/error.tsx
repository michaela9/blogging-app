"use client";

import { useEffect } from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const intl = useIntl();
  return (
    <div className="flex flex-col justify-center">
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "common.error.main",
          defaultMessage: "Something went wrong!",
        })}
      </Heading>
      <Button onClick={() => reset()}>
        {intl.formatMessage({
          id: "common.error.tryAgain",
          defaultMessage: "Try again",
        })}
      </Button>
    </div>
  );
};

export default Error;
