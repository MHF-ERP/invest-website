import { WALLET, WATCHLIST } from "@/static/links";
import requestService from "@/static/requests";

export async function AddStock(
  e: any,
  notify: any,
  token: string | undefined,
  setOverlay: any,
  id: string,
  sell?: boolean
) {
  e.preventDefault();

  const price = e.target.priceOfSahre.value;
  const amount = e.target.numOfShare.value;
  let commission;
  if (sell) {
    commission = e.target.Comession.value;
  }
  console.log("=======================");
  console.log(commission);

  if (!commission) {
    commission = 0;
  }
  console.log(commission);
  if (!price || !amount) {
    return notify("Please Fill All Fields", "error");
  }
  if (price <= 0 && amount <= 0) {
    return notify("Please Put valid Price");
  }
  if (!/^\d*\.?\d*$/.test(price)) {
    return notify("Please Put valid Price");
  }

  const requestJson = JSON.stringify({
    symbol: id,
    amount,
    price,
    commission: commission,
  });

  // Convert the random number to a string and remove the decimal point
  await request(requestJson, token!, id, setOverlay, notify, sell);
}

async function request(
  requestJson: string,
  token: string,
  id: string,
  setOverlay: any,
  notify: any,
  sell?: boolean
) {
  const response = await requestService.post(
    sell ? WALLET + "/sell" : WALLET + "/buy",
    token,
    false,
    requestJson
  );
  if (response["status"] === 200) {
    setOverlay(0);
  } else {
    return notify(response["data"]["message"]);
  }

  return response;
}
