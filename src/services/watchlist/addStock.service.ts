import { WATCHLIST } from "@/static/links";
import requestService from "@/static/requests";

export async function AddStock(
  e: any,
  notify: any,
  token: string | undefined,
  stocks: string[],
  setOverlay: any,
  data: any
) {
  e.preventDefault();

  if (stocks.length === 0) {
    return notify("please choose any watchlist");
  }
  const requestJson = JSON.stringify({
    watch_list_ids: [...stocks],
  });

  const randomNum = Math.random();

  // Convert the random number to a string and remove the decimal point
  const randomString = String(randomNum).substring(2);
  await request(requestJson, token!, randomString, setOverlay);
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

  return response;
}
