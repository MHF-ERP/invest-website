import { STOCKS_DATA } from "@/static/stocks";
import { API_KEY } from "../../../secrets";
import { PROFILE, profileUrl } from "../../static/links";
import requestService from "../../static/requests";
export async function GetSymbolId(id: string) {
  console.log(id);
  const response = await requestService.get(
    profileUrl + `/${id}?apikey=${API_KEY}`
  );
  console.log(response);
  return response.data[0];
  // router.replace("/");
}
