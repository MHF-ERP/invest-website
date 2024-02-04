import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import requestService from "./static/requests";
import { SERVER } from "./static/links";
import axios from "axios";
export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const exist = cookieStore.get("AccessToken");

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
        request.nextUrl.pathname !== "/forgetpassword" &&
        request.nextUrl.pathname !== "/signup"
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      console.error("Error:", response.statusText);
    } else {
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
