import type { Metadata } from "next";

import MyArticles from "@/containers/MyArticles";

import { articles } from "@/data/dummy";

export const metadata: Metadata = {
  title: "Admin - My Articles",
};

export default function Page() {
  return <MyArticles articles={articles} />;
}
