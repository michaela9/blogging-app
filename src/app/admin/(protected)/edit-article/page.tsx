import type { Metadata } from "next";

import EditArticle from "@/containers/EditArticle";

export const metadata: Metadata = {
  title: "Admin - Edit Article",
};

const Page = () => {
  return <EditArticle />;
};

export default Page;
