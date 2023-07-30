import Heading from "@/components/Heading";
import React from "react";
import ArticleItem from "./ArticleItem";

const RecentArticles = () => {
  return (
    <div className="space-y-10">
      <Heading headingLevel="h1" size="s1">
        Recent articles
      </Heading>
      <div className="space-y-6">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    </div>
  );
};

export default RecentArticles;
