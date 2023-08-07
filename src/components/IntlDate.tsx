"use client";

import type { ReactNode } from "react";
import type { CustomFormatConfig } from "react-intl";

import { FormattedDate } from "react-intl";

type ValueT = {
  value: string | number | Date | undefined;
};

type EmptyT = {
  emptyValue?: ReactNode;
};

type OptionsT = Intl.DateTimeFormatOptions & CustomFormatConfig;

type DateT = Pick<OptionsT, "year" | "month" | "day" | "weekday">;
type TimeT = Pick<OptionsT, "hour" | "minute" | "second">;

export function IntlDateTimeFormat({
  value,
  emptyValue = null,
  ...restProps
}: ValueT & EmptyT & OptionsT) {
  return (
    <>{value ? <FormattedDate value={value} {...restProps} /> : emptyValue}</>
  );
}

export function IntlDate({
  value,
  emptyValue = null,
  year = "2-digit",
  month = "2-digit",
  day = "2-digit",
  weekday = undefined,
}: ValueT & EmptyT & DateT) {
  return (
    <IntlDateTimeFormat
      value={value}
      emptyValue={emptyValue}
      year={year}
      month={month}
      day={day}
      weekday={weekday}
    />
  );
}
