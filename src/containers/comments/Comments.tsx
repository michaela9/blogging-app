"use client";

import type { CommentT } from "@/types/types";

import { useTranslations } from "next-intl";
import React from "react";

import Heading from "@/components/Heading";

import Comment from "./Comment";
import JoinDiscussionForm from "../forms/JoinDiscussionForm";

type Props = {
  comments: CommentT[];
};

export default function Comments({ comments }: Props) {
  const t = useTranslations("Comments");

  return (
    <div className="space-y-4">
      <Heading headingLevel="h2" size="s3">
        {t("title", { numberOfComments: comments.length })}
        {t("joinDiscussion")}
      </Heading>
      <JoinDiscussionForm />
      <div className="space-y-6">
        {comments.map((comment) => (
          <Comment key={comment.commentId} comment={comment} />
        ))}
      </div>
    </div>
  );
}
