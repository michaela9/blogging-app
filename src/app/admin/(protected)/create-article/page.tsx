import type { Metadata } from "next";

import CreateArticleForm from "@/containers/forms/CreateArticleForm";

export const metadata: Metadata = {
  title: "Admin - Create Article",
};

export default function Page() {
  return <CreateArticleForm />;
}
