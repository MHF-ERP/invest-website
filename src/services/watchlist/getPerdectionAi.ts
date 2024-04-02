import { PREDECT, WATCHLIST } from "@/static/links";
import requestService from "../../static/requests";
export async function GetPredectionAi(id: string) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const response = await requestService.get(PREDECT);
  // console.log(response);
  return response;
  // router.replace("/");
}
