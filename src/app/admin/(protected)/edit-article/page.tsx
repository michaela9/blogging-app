import type { Metadata } from "next";

import EditArticle from "@/containers/forms/EditArticle";

export const metadata: Metadata = {
  title: "Admin - Edit Article",
};

export default function Page() {
  return <EditArticle />;
}
