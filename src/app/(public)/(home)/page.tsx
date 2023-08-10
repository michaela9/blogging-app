import type { Metadata } from "next";

import RecentArticles from "@/containers/recentArticles/RecentArticles";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

export default function Page() {
  return <RecentArticles />;
}
