import type { Metadata } from "next";

import MyArticles from "@/containers/MyArticles";

export const metadata: Metadata = {
  title: "Admin - My Articles",
};

const Page = () => {
  return <MyArticles />;
};

export default Page;
