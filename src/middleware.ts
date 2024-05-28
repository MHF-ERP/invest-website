import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { SERVER } from "./static/links";
export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const exist = cookieStore.get("AccessToken");
  if (!exist) {
    if (
      request.nextUrl.pathname !== "/" &&
      request.nextUrl.pathname !== "/forget-password" &&
      request.nextUrl.pathname !== "/signup"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  try {
    const response = await fetch(SERVER, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${exist!["value"]}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (
        response.status === 401 &&
        request.nextUrl.pathname !== "/" &&
        request.nextUrl.pathname !== "/forget-password" &&
        request.nextUrl.pathname !== "/signup"
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      } else if (
        response.status !== 401 &&
        (request.nextUrl.pathname === "/" ||
          request.nextUrl.pathname === "/forget-password" ||
          request.nextUrl.pathname === "/signup")
      ) {
        return NextResponse.redirect(new URL("/home", request.url));
      }
      console.error("Error:", response.statusText);
    } else {
      if (
        response.status !== 401 &&
        (request.nextUrl.pathname === "/" ||
          request.nextUrl.pathname === "/forget-password" ||
          request.nextUrl.pathname === "/signup")
      ) {
        return NextResponse.redirect(new URL("/home", request.url));
      }
      const data = await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export const config = {
  matcher: ["/", "/home", "/signup", "/watchlist", "/stock/[:id]", "/discover","/orderHistory"],
};
