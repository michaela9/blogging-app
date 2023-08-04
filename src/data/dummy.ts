import type { ArticleDetail } from "@/types/types";

export const articles: ArticleDetail[] = [
  {
    articleId: "1",
    imageId: "/img.png",
    title: "Why Do Cats Have Whiskers?",
    perex: "A cat's whiskers — or vibrissae — are a well-hon",
    createdAt: "02/13/17",
    content:
      "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
    comments: [
      {
        commentId: "123",
        articleId: "123",
        author: "jan novak",
        content: "cooment 1",
        postedAt: "01 01 02",
        score: 2,
      },
      {
        commentId: "1253",
        articleId: "1253",
        author: "jan novak",
        content: "cooment 2",
        postedAt: "01 01 52",
        score: 3,
      },
    ],
  },
  {
    articleId: "2",
    imageId: "/img.png",
    title: "Why Do Cats Eat Lasagnas?",
    perex: "A cat's whiskers — or vibrissae — are a well-hon",
    createdAt: "02/13/17",
    content:
      "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
    comments: [
      {
        commentId: "123",
        articleId: "123",
        author: "jan novak",
        content: "cooment 1",
        postedAt: "01 01 02",
        score: 2,
      },
      {
        commentId: "1253",
        articleId: "1253",
        author: "jan novak",
        content: "cooment 2",
        postedAt: "01 01 52",
        score: 3,
      },
    ],
  },
];
