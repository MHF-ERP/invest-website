import { WALLET } from "@/static/links";
import requestService from "../../static/requests";
export async function GetStocks(token: string) {
  const response = await requestService.get(WALLET, token);
  console.log(response["data"]["data"]);
  return response!["data"]["data"];
}
