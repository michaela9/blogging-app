import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HeaderWrapper({ children }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
      {children}
    </div>
  );
}
