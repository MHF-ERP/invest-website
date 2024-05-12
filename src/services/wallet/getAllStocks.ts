import { API_KEY } from "../../../secrets";
import { MARKET, MARKET_STOCKS, PROFILE, profileUrl } from "../../static/links";
import requestService from "../../static/requests";
export async function GetAllStocks(setStocks: any) {
  const data = [];
  const marketRequest = await requestService.get(MARKET);
  const markets = marketRequest.data.data;
  for (let i = 0; i < markets.length; i += 1) {
    const stocks = await requestService.get(MARKET_STOCKS + "/" + markets[i]);
    const symbolString = stocks.data.data.join(","); // Convert array to comma-separated string

    const response = await requestService.get(
      profileUrl + `/${symbolString}?apikey=${API_KEY}`
    );
    data.push(...response.data);
  }
  setStocks(data);

  // router.replace("/");
}
