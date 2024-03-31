import { WATCHLIST } from "../../static/links";
import requestService from "../../static/requests";

export async function DeleteStock(id: string, symbol: string) {
  const response = await requestService.delete(
    WATCHLIST + "/" + id + "/stocks" + "/" + symbol
  );
  console.log(response);
  return response.data;

  // router.replace("/");
}
