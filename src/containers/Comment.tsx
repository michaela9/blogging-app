"use client";

import type { CommentT } from "@/types/types";

import Image from "next/image";
import React from "react";

import Description from "@/components/Description";
import Heading from "@/components/Heading";

type Props = {
  comment: CommentT;
};

export default function Comment({ comment }: Props) {
  return (
    <div className="flex gap-6">
      <Image
        src=""
        alt="Profile photo"
        className="shrink-0 w-10 h-10 object-cover overflow-hidden rounded-full bg-red-400"
        width={100}
        height={100}
      />
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <Heading headingLevel="h3" size="s4">
            {comment.author}
          </Heading>
          <Description size="sm" className="text-secondary-text">
            {comment.postedAt}
          </Description>
        </div>
        <div>{comment.content}</div>
        <div>+6 </div>
      </div>
    </div>
  );
}
