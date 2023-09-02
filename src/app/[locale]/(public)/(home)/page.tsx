// import type { Metadata } from "next";
import { fetchArticles } from "@/utils/getArticles";

import RecentArticles from "@/containers/recentArticles/RecentArticles";

// export const metadata: Metadata = {
//   title: "Homepage - Recent Articles",
// };

export default async function Page() {
  const data = await fetchArticles();
  const articles = data.items;

  const isDataEmpty =
    !Array.isArray(articles) || articles.length < 1 || !articles;
  return (
    <div>
      {!isDataEmpty && <p>Ooops, there are no articles</p>}
      {!isDataEmpty && <RecentArticles articles={articles} />}
    </div>
  );
}
