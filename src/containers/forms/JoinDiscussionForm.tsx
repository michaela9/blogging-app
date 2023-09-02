"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import { profilePhoto } from "@/data/dummy";

export default function JoinDiscussionForm() {
  const t = useTranslations("JoinDiscussionForm");

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
        <label className="sr-only">{t("label")}</label>
        <input
          placeholder="Join the discussion"
          name="joinDiscussion"
          className="rounded-md border-gray-300 w-full"
        />
      </form>
    </div>
  );
}
