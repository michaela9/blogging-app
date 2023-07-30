"use client";

import React from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

const MyArticles = () => {
  const intl = useIntl();
  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.myArticles.heading",
            defaultMessage: "My articles",
          })}
        </Heading>
        <Button>
          {intl.formatMessage({
            id: "containers.myArticles.createNewArticle",
            defaultMessage: "Create New Article",
          })}
        </Button>
      </div>
      <table>
        <thead className="border-b border-gray-300">
          <th className="px-4">neco</th>
          <th className="px-4">neco zas</th>
        </thead>
        <tbody>
          <td className="px-4">shsh</td>
          <td className="px-4">diul</td>
        </tbody>
      </table>
    </div>
  );
};

export default MyArticles;
