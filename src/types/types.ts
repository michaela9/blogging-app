export type LoginRequest = {
  password: string;
  username: string;
};

export type LoginResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type ArticleT = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt: string;
};

export type ArticleDetailT = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt?: string;
  content: string;
  comments: CommentT[];
};

export type CommentT = {
  commentId: string;
  articleId: string;
  author: string;
  content: string;
  postedAt: string;
  score: number;
};

export type TenantT = {
  tenantId: string;
  apiKey: string;
  name: string;
  password: string;
  createdAt: string;
  lastUsedAt: string;
};

export type ImageInfoT = {
  imageId: string;
  name: string;
};

export type PaginationT = {
  offset: number;
  limit: number;
  total: number;
};
