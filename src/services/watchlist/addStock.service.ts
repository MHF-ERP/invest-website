import { WALLET, WATCHLIST } from "@/static/links";
import requestService from "@/static/requests";

export async function AddStock(
  e: any,
  notify: any,
  notify2: any,
  token: string | undefined,
  setOverlay: any,
  id: string,
  sell?: boolean
) {
  e.preventDefault();

  const price = e.target.priceOfSahre.value;
  const amount = e.target.numOfShare.value;
  const provider = e.target.provider.value;

  let commission;
  if (sell) {
    commission = e.target.Comession.value;
  }
  if (commission && commission < 0) {
    return notify("Please Put valid Commission");
  }
  if (!commission) {
    commission = 0;
  }

  if (!price || !amount) {
    return notify("Please fill in all fields", "error");
  }
  if (!provider) {
    return notify("Please Put valid Provider");
  }
  if (price <= 0) {
    return notify("Please Put valid Price");
  }
  if (amount <= 0) {
    return notify("Please Put valid Amount");
  }
  if (!/^\d*\.?\d*$/.test(price)) {
    return notify("Please Put valid Price");
  }

  const requestJson = JSON.stringify({
    symbol: id,
    amount,
    price,
    commission: commission,
    provider: provider,
  });

  // Convert the random number to a string and remove the decimal point
  await request(requestJson, token!, id, setOverlay, notify, notify2, sell);
}

async function request(
  requestJson: string,
  token: string,
  id: string,
  setOverlay: any,
  notify: any,
  notify2: any,

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
    if (sell) {
      return notify2("Sell Stock Successfully");
    } else {
      return notify2("Buy Stock Successfully");
    }
  } else {
    return notify(response["data"]["message"]);
  }
}
