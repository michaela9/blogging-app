"use client";

import React from "react";
import { useIntl } from "react-intl";

import Heading from "@/components/Heading";

import Comment from "./Comment";
import JoinDiscussion from "./forms/JoinDiscussion";

export type CommentT = {
  id: string;
  name: string;
  dateAndTime: string;
  photo: string;
  text: string;
};

const comments: CommentT[] = [
  {
    id: "1",
    name: "Lily Hawkins",
    dateAndTime: "2 hours ago",
    photo: "/img.png",
    text: "You see, wire telegraph is a kind of a very, very long cat. You pull his tail in New York and his head is meowing in Los Angeles. Do you understand this? And radio operates exactly the same way: you send signals here, they receive them there. The only difference is that there is no cat.",
  },
  {
    id: "2",
    name: "Lily Hawkins",
    dateAndTime: "2 hours ago",
    photo: "/img.png",
    text: "You see, wire telegraph is a kind of a very, very long cat. You pull his tail in New York and his head is meowing in Los Angeles. Do you understand this? And radio operates exactly the same way: you send signals here, they receive them there. The only difference is that there is no cat.",
  },
];

const numberOfComments = 5;

const Comments = () => {
  const intl = useIntl();
  return (
    <div className="space-y-4">
      <Heading headingLevel="h2" size="s3">
        {intl.formatMessage(
          {
            id: "containers.ArticleItem.heading",
            defaultMessage: "Comments {number_of_comments}",
          },
          {
            number_of_comments: numberOfComments,
          },
        )}
      </Heading>
      <JoinDiscussion />
      <div className="space-y-6">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
