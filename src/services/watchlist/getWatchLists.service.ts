import { WATCHLIST } from "@/static/links";
import requestService from "../../static/requests";
export async function GetWatchLists(token: string, updateData: any) {
  const response = await requestService.get(WATCHLIST + "/all", token);
  updateData(response!["data"]["data"]);
  console.log(response!["data"]["data"]);
  return response;
  // router.replace("/");
}
