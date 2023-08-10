"use client";

import type { CommentT } from "@/types/types";

import React from "react";
import { useIntl } from "react-intl";

import Heading from "@/components/Heading";

import Comment from "./Comment";
import JoinDiscussionForm from "../forms/JoinDiscussionForm";

const numberOfComments = 5;

type Props = {
  comments: CommentT[];
};
export default function Comments({ comments }: Props) {
  const intl = useIntl();
  return (
    <div className="space-y-4">
      <Heading headingLevel="h2" size="s3">
        {intl.formatMessage(
          {
            id: "containers.comments.title",
            defaultMessage: "Comments {number_of_comments}",
          },
          {
            number_of_comments: numberOfComments,
          },
        )}
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
