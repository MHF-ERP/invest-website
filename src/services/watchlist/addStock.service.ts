import { test } from "@/functions/validations";
import { PERSONAL, WATCHLIST } from "@/static/links";
import requestService from "@/static/requests";

export async function AddStock(
  notify: any,
  token: string | undefined,
  stocks: string[],
  setOverlay: any
) {
  // **************Test******************
  if (stocks.length === 0) {
    return notify("please choose any watchlist");
  }
  // **************Handel Request******************
  const requestJson = JSON.stringify({
    ...stocks,
  });
  // **************Send Request******************
  for (let i = 0; i < stocks.length; i++) {
    await request(requestJson, token!, stocks[i], setOverlay);
  }
}
async function request(
  requestJson: string,
  token: string,
  id: string,
  setOverlay: any
) {
  const response = await requestService.post(
    WATCHLIST + "/" + id + "/stocks",
    token,
    false,
    requestJson
  );
  if (response["status"] === 200) {
    setOverlay(0);
  }
}
