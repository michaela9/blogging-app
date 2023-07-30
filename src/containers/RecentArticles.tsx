"use client";

import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";

import Heading from "@/components/Heading";

import ArticleItem from "./ArticleItem";

export type Article = {
  id: string;
  image: string;
  heading: string;
  author: string;
  date: string;
  description: string;
  link: string;
  numberOfComments: number;
};

const articles: Article[] = [
  {
    id: "1",
    image: "/img.png",
    heading: "Why Do Cats Have Whiskers?",
    author: "Elisabeth Strain",
    date: "02/13/17",
    description:
      "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
    link: "/",
    numberOfComments: 0,
  },
  {
    id: "2",
    image: "/img.png",
    heading: "Why Do Cats Eat Lasagnas?",
    author: "Paul Randalph",
    date: "02/13/17",
    description:
      "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
    link: "/",
    numberOfComments: 5,
  },
];

const RecentArticles = () => {
  const intl = useIntl();
  return (
    <div className="space-y-10">
      <Heading headingLevel="h1" size="s1">
        {intl.formatMessage({
          id: "containers.recentArticles.heading",
          defaultMessage: "Recent Articles",
        })}
      </Heading>
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id}>
            <Link href={`/blog-posts/${article.id}`}>
              <ArticleItem article={article} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
