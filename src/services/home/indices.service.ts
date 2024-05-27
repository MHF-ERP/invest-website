import { API_KEY } from "../../../secrets";
import { MARKET_STOCKS, PROFILE, profileUrl } from "../../static/links";
import requestService from "../../static/requests";
import { GetAllAi } from "./getAllAI";
export async function GetSymbol(
  setStocks: any,
  market: string,
  ai?: boolean,
  setDataUp?: any,
  setDataDown?: any,
  all?: boolean,
  setOrigiData?: any,
  setData?: any
) {
  const stocks = await requestService.get(MARKET_STOCKS + "/" + market);
  const symbolString = stocks.data.data.join(","); // Convert array to comma-separated string

  const response = await requestService.get(
    profileUrl + `/${symbolString}?apikey=${API_KEY}`
  );

  if (all) {
    setOrigiData(response.data);
    setData(response.data);
  }
  console.log(all);
  setStocks(response.data);
  if (ai) {
    if (all) {
      await GetAllAi(
        market,
        setDataUp,
        setDataDown,
        all,
        setOrigiData,
        setData
      );
    } else {
      await GetAllAi(market, setDataUp, setDataDown);
    }
  }
  return response;
  // router.replace("/");
}
