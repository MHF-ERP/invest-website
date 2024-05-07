import { API_KEY } from "../../../secrets";
import { MARKET_STOCKS, PROFILE, profileUrl } from "../../static/links";
import requestService from "../../static/requests";
export async function GetSymbol(setStocks: any, market: string) {
  const stocks = await requestService.get(MARKET_STOCKS + "/" + market);
  const symbolString = stocks.data.data.join(","); // Convert array to comma-separated string

  const response = await requestService.get(
    profileUrl + `/${symbolString}?apikey=${API_KEY}`
  );
  setStocks(response.data);

  return response;
  // router.replace("/");
}
