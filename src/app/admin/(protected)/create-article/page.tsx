import type { Metadata } from "next";

import CreateArticle from "@/containers/CreateArticle";

export const metadata: Metadata = {
  title: "Admin - Create Article",
};

const Page = () => {
  return <CreateArticle />;
};

export default Page;
