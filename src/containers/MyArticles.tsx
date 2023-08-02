"use client";

import React from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import type { Article } from "@/data/dummy";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

type Props = {
  articles: Article[];
};

const MyArticles = ({ articles }: Props) => {
  const intl = useIntl();
  return (
    <div className="space-y-14">
      <div className="flex gap-6 items-center">
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
      </div>
      <table>
        <thead className="border-b border-gray-300">
          <tr className="border-b border-gray-400">
            <th className="text-left px-4">--</th>
            <th className="text-left px-4">
              {intl.formatMessage({
                id: "containers.myArticles.th.title",
                defaultMessage: "Article title",
              })}
            </th>
            <th className="text-left px-4">
              {intl.formatMessage({
                id: "containers.myArticles.th.perex",
                defaultMessage: "Perex",
              })}
            </th>
            <th className="text-left px-4">
              {intl.formatMessage({
                id: "containers.myArticles.th.author",
                defaultMessage: "Author",
              })}
            </th>
            <th className="text-left px-4">
              {intl.formatMessage({
                id: "containers.myArticles.th.CommentsCount",
                defaultMessage: "# of comments",
              })}
            </th>
            <th className="text-left px-4">
              {intl.formatMessage({
                id: "containers.myArticles.th.actions",
                defaultMessage: "Actions",
              })}
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr
              className="p-3 border-b border-gray-300"
              key={article.articleId}
            >
              <td className="px-4 py-3">--</td>
              <td className="px-4 py-3">{article.title}</td>
              <td className="px-4 py-3">{article.perex}</td>
              <td className="px-4 py-3">{article.author}</td>
              <td className="px-4 py-3">{article.numberOfComments}</td>
              <td className="px-4 py-3 text-center">
                <div className="flex gap-4 items-center">
                  <button>
                    <PencilIcon className="w-5" />
                  </button>
                  <button>
                    <TrashIcon className="w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyArticles;
