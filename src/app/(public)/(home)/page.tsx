import RecentArticles from "@/containers/RecentArticles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

export default function Page() {
  return <RecentArticles />;
}
