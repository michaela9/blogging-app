// "use client";

// import type { Metadata } from "next";

import ArticleDetail from "@/containers/articleDetail/ArticleDetail";

// export const metadata: Metadata = {
//   title: "Homepage articArticle Detail",
// };

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: Props) {
  return <ArticleDetail id={id} />;
}
