export const baseUrl = "https://fullstack.exercise.applifting.cz";
export const tenantsUrl = `${baseUrl}/tenants`;
export const loginUrl = `${baseUrl}/login`;
export const articlesUrl = `${baseUrl}/articles`;

export enum AppUrl {
  home = "/",
  login = "/login",
  article = "/articles/[id]",
}

export enum AdminUrl {
  index = "/admin",
  createArticle = "/admin/create-article",
  editArticle = "/admin/edit-article",
}
