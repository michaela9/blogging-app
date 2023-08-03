import type { Metadata } from "next";

import EditArticle from "@/containers/forms/EditArticle";

export const metadata: Metadata = {
  title: "Admin - Edit Article",
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: Props) {
  return <EditArticle id={id} />;
}
