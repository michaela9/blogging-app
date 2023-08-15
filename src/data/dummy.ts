import type { ArticleDetailT, ArticleT, TenantT } from "@/types/types";

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
      author: "jan novak",
      content: "comment 1",
      postedAt: "2023-07-31T17:40:43.9882855Z",
      score: 2,
    },
    {
      commentId: "1253",
      articleId: "1253",
      author: "jan novak",
      content: "comment 2",
      postedAt: "2023-07-31T17:40:43.9882855Z",
      score: 3,
    },
  ],
};

export const currentUser: TenantT = {
  tenantId: "a8c1f7c6-d282-4137-a157-1d69d42a3221",
  apiKey: "03f69bd1-0bc1-4760-b5b7-ee66c310e245",
  name: "Michaela",
  password: "Cokolada99",
  createdAt: "2023-07-31T17:40:43.9882855Z",
  lastUsedAt: "2023-07-31T17:40:43.9882855Z",
};

export const testUser: TenantT = {
  tenantId: "",
  apiKey: "b21611a3-d995-499c-80d5-4e0f72db5ae1",
  name: "novak",
  password: "novak123",
  createdAt: "",
  lastUsedAt: "",
};

export const profilePhoto = "/img.png";
