"use client";

import type { Dispatch } from "react";
import type { ArticleT } from "@/types/types";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import { AdminUrl, AppUrl } from "@/config/router";

import BaseModal from "@/components/BaseModal";
import CustomLink from "@/components/CustomLink";
import TableComponent from "@/components/table/TableComponent";
import TBody from "@/components/table/TBody";
import Td from "@/components/table/Td";
import Th from "@/components/table/Th";
import THead from "@/components/table/THead";
import TRow from "@/components/table/TRow";

import DeleteArticleForm from "../modals/DeleteArticleModal";

type Props = {
  articles: ArticleT[];
  selectedArticlesIds: string[];
  setSelectedArticlesIds: Dispatch<React.SetStateAction<string[]>>;
  refetch: () => void;
};

export default function MyArticlesTable({
  articles,
  selectedArticlesIds,
  setSelectedArticlesIds,
  refetch,
}: Props) {
  const intl = useIntl();
  const [selectedArticleIdForDeletion, setSelectedArticleIdForDeletion] =
    useState<string | null>(null);

  const toggleSelectAll = () => {
    setSelectedArticlesIds((prevSelectedArticlesIds) =>
      prevSelectedArticlesIds.length === articles.length
        ? []
        : articles.map((article) => article.articleId),
    );
  };

  const toggleSelectArticle = (id: string) => {
    setSelectedArticlesIds((prevSelectedArticlesIds) =>
      prevSelectedArticlesIds.includes(id)
        ? prevSelectedArticlesIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedArticlesIds, id],
    );
  };

  const isAllSelected = selectedArticlesIds.length === articles.length;
  const isArticleSelected = (id: string) => selectedArticlesIds.includes(id);

  return (
    <TableComponent>
      <THead>
        <TRow>
          <Th>
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={toggleSelectAll}
            />
          </Th>
          <Th>
            {intl.formatMessage({
              id: "containers.myArticlesTable.th.title",
              defaultMessage: "Article title",
            })}
          </Th>
          <Th>
            {intl.formatMessage({
              id: "containers.myArticlesTable.th.perex",
              defaultMessage: "Perex",
            })}
          </Th>
          <Th>
            {intl.formatMessage({
              id: "containers.myArticlesTable.th.author",
              defaultMessage: "Author",
            })}
          </Th>
          <Th>
            {intl.formatMessage({
              id: "containers.myArticlesTable.th.numberOfComments",
              defaultMessage: "# of comments",
            })}
          </Th>
          <Th>
            {intl.formatMessage({
              id: "containers.myArticlesTable.th.actions",
              defaultMessage: "Actions",
            })}
          </Th>
        </TRow>
      </THead>
      <TBody>
        {articles.map((article) => {
          return (
            <TRow key={article.articleId}>
              <Td>
                <label>
                  <input
                    type="checkbox"
                    checked={isArticleSelected(article.articleId)}
                    onChange={() => toggleSelectArticle(article.articleId)}
                  />
                </label>
              </Td>
              <Td>
                <CustomLink
                  href={`${AppUrl.articles}/${article.articleId}`}
                  style="secondary"
                >
                  {article.title}
                </CustomLink>
              </Td>
              <Td>{article.perex}</Td>
              <Td>TODO author</Td>
              <Td>TODO number of comments</Td>
              <Td className="text-center">
                <div className="flex gap-4 items-center">
                  <CustomLink
                    href={`${AdminUrl.editArticle}/${article.articleId}`}
                  >
                    <PencilIcon className="w-5" />
                  </CustomLink>
                  <button
                    onClick={() =>
                      setSelectedArticleIdForDeletion(article.articleId)
                    }
                  >
                    <TrashIcon className="w-5" />
                  </button>
                  {selectedArticleIdForDeletion === article.articleId && (
                    <BaseModal
                      closeModal={() => setSelectedArticleIdForDeletion(null)}
                      isOpen={
                        selectedArticleIdForDeletion === article.articleId
                      }
                    >
                      <DeleteArticleForm
                        articleId={selectedArticleIdForDeletion}
                        closeModal={() => setSelectedArticleIdForDeletion(null)}
                        refetch={refetch}
                      />
                    </BaseModal>
                  )}
                </div>
              </Td>
            </TRow>
          );
        })}
      </TBody>
    </TableComponent>
  );
}
