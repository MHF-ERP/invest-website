import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const exist = cookieStore.get("AccessToken");
  if (
    !exist &&
    request.nextUrl.pathname !== "/" &&
    request.nextUrl.pathname !== "/signup"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (exist && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  } else if (exist && request.nextUrl.pathname === "/signup") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}

export const config = {
  matcher: ["/", "/home", "/signup", "/watchlist", "/stock/[:id]", "/discover"],
};
