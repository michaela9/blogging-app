import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    [
      "/logo.png",
      "/logo.ico",
      "/img.png",
      // Your other files in `public`
    ].includes(pathname)
  )
    return;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
