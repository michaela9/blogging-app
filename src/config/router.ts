export const baseUrl = "https://fullstack.exercise.applifting.cz";
export const tenantsUrl = `${baseUrl}/tenants`;
export const loginUrl = `${baseUrl}/login`;
export const articlesUrl = `${baseUrl}/articles`;

export enum AppUrl {
  home = "/",
  about = "/about",
  login = "/login",
  images = "/images",
  article = "/articles/[id]",
}

export enum AdminUrl {
  home = "/admin",
  createArticle = "/admin/create-article",
  editArticle = "/admin/edit-article",
}
