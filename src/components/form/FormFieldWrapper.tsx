"use client";

import type { ReactNode } from "react";

import React from "react";

type Props = {
  children: ReactNode;
};
const FormFieldWrapper = ({ children }: Props) => {
  return <div className="space-y-2">{children}</div>;
};

export default FormFieldWrapper;
