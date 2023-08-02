import type { Metadata } from "next";

import RecentArticles from "@/containers/RecentArticles";

import { articles } from "@/data/dummy";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

export default function Page() {
  return <RecentArticles articles={articles} />;
}
