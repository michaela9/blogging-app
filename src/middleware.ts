import { NextRequest, NextResponse } from "next/server";
import { AppUrl } from "./config/router";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  const isLoggedIn = !!token;

  if (!isLoggedIn) {
    if (
      request.nextUrl.pathname.startsWith(AppUrl.myArticles) ||
      request.nextUrl.pathname.startsWith(AppUrl.editArticle) ||
      request.nextUrl.pathname.startsWith(AppUrl.createArticle)
    ) {
      return NextResponse.redirect(new URL(AppUrl.home, request.url));
    }
  }

  return NextResponse.next();
}
