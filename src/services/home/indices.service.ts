import { STOCKS_DATA } from "@/static/stocks";
import { API_KEY } from "../../../secrets";
import { PROFILE, profileUrl } from "../../static/links";
import requestService from "../../static/requests";
export async function GetSymbol(setStocks: any) {
  const symbolString = STOCKS_DATA.join(","); // Convert array to comma-separated string
  console.log("hello");
  const response = await requestService.get(
    profileUrl + `/${symbolString}?apikey=${API_KEY}`
  );

  setStocks(response.data);

  return response;
  // router.replace("/");
}
