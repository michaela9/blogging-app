import type { Metadata } from "next";

import RecentArticles from "@/containers/RecentArticles";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

const Page = () => {
  return <RecentArticles />;
};
export default Page;
