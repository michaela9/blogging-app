"use client";

import { useFormatter } from "next-intl";

type Props = {
  date: number | Date;
};

export function IntlDate({ date }: Props) {
  const format = useFormatter();

  const fDate = new Date(date);

  const formattedDate = format.dateTime(fDate, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
}
