import { NEWS } from "@/static/links";
import { API_KEY } from "../../secrets";
import requestService from "@/static/requests";
export async function GetNews(market: string, symbolId: string) {
  console.log(symbolId);
  const response = await requestService.get(
    NEWS + `&apikey=${API_KEY}&tickers=${symbolId}`
  );

  console.log(response.data);

  return response.data;
}
