import React from "react";

import Heading from "@/components/Heading";

const MyArticles = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <Heading headingLevel="h1" size="s1">
          My articles
        </Heading>
        <button className="bg-primary rounded-md px-4 py-2 text-white">
          Create New Article
        </button>
      </div>
      <table>
        <thead className="border-b border-gray-300">
          <th className="px-4">neco</th>
          <th className="px-4">neco zas</th>
        </thead>
        <tbody>
          <td className="px-4">shsh</td>
          <td className="px-4">diul</td>
        </tbody>
      </table>
    </div>
  );
};

export default MyArticles;
