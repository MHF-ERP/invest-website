import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import requestService from "./static/requests";
import { SERVER } from "./static/links";
import axios from "axios";
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
        console.log("auth");
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
        console.log("auth");
        return NextResponse.redirect(new URL("/home", request.url));
      }
      const data = await response.json();
      console.log("Response:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  // const response = await requestService.get(SERVER, exist!["name"]);
  // console.log(response);
}

export const config = {
  matcher: ["/", "/home", "/signup", "/watchlist", "/stock/[:id]", "/discover"],
};
