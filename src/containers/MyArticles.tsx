"use client";

import type { ArticleT } from "@/types/types";

import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

import MyArticlesTable from "./MyArticlesTable";

type Props = {
  articles: ArticleT[];
};

const MyArticles = ({ articles }: Props) => {
  const intl = useIntl();
  const [selectedArticlesIds, setSelectedArticlesIds] = useState<string[]>([]);

  return (
    <div className="space-y-6 sm:space-y-14">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.myArticles.title",
            defaultMessage: "My articles",
          })}
        </Heading>
        <Button>
          {intl.formatMessage({
            id: "containers.myArticles.button.createNewArticle",
            defaultMessage: "Create New Article",
          })}
        </Button>
        {selectedArticlesIds.length ? (
          <button
            className="flex gap-2 text-red-500"
            onClick={() => console.log("Delete Selected Articles")}
          >
            <TrashIcon className="w-5" />
            {intl.formatMessage({
              id: "containers.myArticles.button.delete",
              defaultMessage: "Delete Selected Articles",
            })}
          </button>
        ) : null}
      </div>
      <MyArticlesTable
        articles={articles}
        selectedArticlesIds={selectedArticlesIds}
        setSelectedArticlesIds={setSelectedArticlesIds}
      />
    </div>
  );
};

export default MyArticles;
