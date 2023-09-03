import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

export default function Home() {
  // const data = await fetchArticles();
  // const articles = data.items;
  // const sortedArticles = sortArticles(articles);

  // const isDataEmpty =
  //   !Array.isArray(articles) || articles.length < 1 || !articles;
  return (
    <div>
      {/* {isDataEmpty && <p>Ooops, there are no articles</p>}
      {!isDataEmpty && <RecentArticles articles={sortedArticles} />} */}
      <h1>Hello</h1>
      <button>Click me</button>
    </div>
  );
}
