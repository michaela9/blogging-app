export type LoginRequest = {
  password: string;
  username: string;
};

export type LoginResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type Article = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt: string;
};

export type ArticleDetail = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt?: string;
  content: string;
  comments: Comment[];
};

export type Comment = {
  commentId: string;
  articleId: string;
  author: string;
  content: string;
  postedAt: string;
  score: number;
};

export type Tenant = {
  tenantId: string;
  apiKey: string;
  name: string;
  password: string;
  createdAt: string;
  lastUsedAt: string;
};

export type ImageInfo = {
  imageId: string;
  name: string;
};

export type Pagination = {
  offset: number;
  limit: number;
  total: number;
};
