import type { Metadata } from "next";

import CreateArticle from "@/containers/CreateArticle";

export const metadata: Metadata = {
  title: "Admin - Create Article",
};

export default function Page() {
  return <CreateArticle />;
}
