import type { ArticleDetailT, ArticleT } from "@/types/types";

export const articles: ArticleT[] = [
  {
    articleId: "1",
    imageId: "/img.png",
    title: "Why Do Cats Have Whiskers?",
    perex:
      " A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon",
    createdAt: "2023-07-31T17:40:43.9882855Z",
    lastUpdatedAt: "2023-07-31T17:40:43.9882855Z",
  },
  {
    articleId: "2",
    imageId: "/img.png",
    title: "Why Do Cats Eat Lasagnas?",
    perex:
      "A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon",
    createdAt: "2023-07-31T17:40:43.9882855Z",
    lastUpdatedAt: "2023-07-31T17:40:43.9882855Z",
  },
];

export const articleDetail: ArticleDetailT = {
  articleId: "1",
  imageId: "/img.png",
  title: "Why Do Cats Have Whiskers?",
  perex:
    " A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon",
  createdAt: "2023-07-31T17:40:43.9882855Z",
  content:
    "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
  comments: [
    {
      commentId: "123",
      articleId: "123",
      author: "Jan Novák",
      content: "comment 1",
      postedAt: "2023-07-31T17:40:43.9882855Z",
      score: 2,
    },
    {
      commentId: "1253",
      articleId: "1253",
      author: "Jan Novák",
      content: "comment 2",
      postedAt: "2023-07-31T17:40:43.9882855Z",
      score: 3,
    },
  ],
};

export const profilePhoto = "/img.png";
