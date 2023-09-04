"use client";

import Image from "next/image";
import React from "react";
import { useIntl } from "react-intl";

import { profilePhoto } from "@/data/dummy";

export default function JoinDiscussionForm() {
  const intl = useIntl();

  return (
    <div className="flex gap-6">
      <Image
        src={profilePhoto}
        alt="Profile photo"
        className="shrink-0 w-10 h-10 object-cover overflow-hidden rounded-full"
        width={100}
        height={100}
      />
      <form className="w-full">
        <label className="sr-only">
          {" "}
          {intl.formatMessage({
            id: "containers.forms.joinDiscussion.label",
            defaultMessage: "Join the disccussion",
          })}
        </label>
        <input
          placeholder="Join the discussion"
          name="joinDiscussion"
          className="rounded-md border-gray-300 w-full"
        />
      </form>
    </div>
  );
}
