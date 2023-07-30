import type { CommentT } from "./Comments";

import Image from "next/image";
import React from "react";

import Heading from "@/components/Heading";

type Props = {
  comment: CommentT;
};

const Comment = ({ comment }: Props) => {
  return (
    <div className="flex gap-6">
      <Image
        src={comment.photo}
        alt="Profile photo"
        className="shrink-0 w-10 h-10 object-cover overflow-hidden rounded-full"
        width={100}
        height={100}
      />
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <Heading headingLevel="h3" size="s4">
            {comment.name}
          </Heading>
          <p className="text-sm text-secondary-text">{comment.dateAndTime}</p>
        </div>
        <div>{comment.text}</div>
        <div>+6 </div>
      </div>
    </div>
  );
};

export default Comment;
