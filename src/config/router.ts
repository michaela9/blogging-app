export const backendEndpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

// export const baseUrl = "https://fullstack.exercise.applifting.cz";
export const tenantsEndpoint = `${backendEndpoint}/tenants`;
export const loginEndpoint = `${backendEndpoint}/login`;
export const articlesEndpoint = `${backendEndpoint}/articles`;
export const imagesEndpoint = `${backendEndpoint}/images`;

export enum AppUrl {
  home = "/",
  about = "/about",
  login = "/login",
  images = "/images",
  articles = "/articles",
  myArticles = "/my-articles",
  createArticle = "/create-article",
  editArticle = "/edit-article",
}
