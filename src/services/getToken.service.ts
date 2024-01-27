import { cookies } from "next/headers";
export async function GetCookie() {
  const cookieStore = cookies();
  return cookieStore;
}
