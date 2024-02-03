import { WATCHLIST } from "@/static/links";
import requestService from "../../static/requests";
export async function GetWatchLists(token: string) {
  const response = await requestService.get(WATCHLIST + "/all", token);
  return response;
  // router.replace("/");
}
