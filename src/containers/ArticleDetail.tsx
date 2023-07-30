import type { Article } from "./RecentArticles";

import Image from "next/image";
import React from "react";

import Heading from "@/components/Heading";

import ArticleShortItem from "./ArticleShortItem";
import Comments from "./Comments";

const relatedArticles: Article[] = [
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

const myArticle = {
  id: "2",
  image: "/img.png",
  heading: "Why Do Cats Eat Lasagnas?",
  author: "Paul Randalph",
  date: "02/13/17",
  description:
    "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
  link: "/",
  numberOfComments: 5,
};

type Props = {
  id: string;
  article: Article;
};

const ArticleDetail = ({ id, article }: Props) => {
  return (
    <div className="grid grid-cols-[2fr,1fr]">
      <div className="space-y-6 pr-6">
        <Heading headingLevel="h1" size="s1">
          {myArticle.heading}
        </Heading>
        <div className="space-y-6 border-b border-b-gray-300 pb-10">
          <div className="text-secondary-text text-xs flex gap-4">
            <p>{myArticle.author}</p>
            <p>{myArticle.date}</p>
          </div>
          <div className="">
            <Image
              src={myArticle.image}
              alt="Cat image"
              className="shrink-0 object-cover overflow-hidden"
              width={760}
              height={500}
            />
          </div>
          <p>{myArticle.description}</p>
        </div>
        <Comments />
      </div>
      <div className="pl-6 border-l border-l-gray-300 space-y-8">
        <Heading headingLevel="h2" size="s3">
          Related articles
        </Heading>
        <div className="space-y-6">
          {relatedArticles.map((article) => (
            <ArticleShortItem key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
