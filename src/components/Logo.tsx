import type { ClassValue } from "clsx";

import Image from "next/image";
import React from "react";

import { AppUrl } from "@/config/router";

import clsxm from "@/utils/clsxm";

import CustomLink from "./CustomLink";

type Props = {
  width: number;
  height: number;
  className?: ClassValue;
};

export default function Logo({ width, height, className }: Props) {
  return (
    <CustomLink href={AppUrl.home} className={clsxm(className)}>
      <Image
        src="/logo.png"
        alt="Logo - cat"
        className=""
        width={width}
        height={height}
        priority
      />
    </CustomLink>
  );
}
