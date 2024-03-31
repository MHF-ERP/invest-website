import { test } from "@/functions/validations";
import { PERSONAL, WATCHLIST } from "@/static/links";
import requestService from "@/static/requests";

export async function CreateWatchList(
  e: any,
  notify: any,
  token: string | undefined,
  setOverlay: any,
  data: string[]
) {
  e.preventDefault();
  const listName = e.target.listName.value;

  // **************Test******************
  if (listName.length === 0) {
    return notify("The name field must not be left empty");
  }
  if (data.length === 0) {
    return notify("Please choose any Stock");
  }
  console.log(data);
  // **************Handel Request******************
  const requestJson = JSON.stringify({
    name: listName,
    symbols: data,
  });
  // **************Send Request******************
  await request(requestJson, token!, setOverlay, notify);
}
async function request(
  requestJson: string,
  token: string,
  setOverlay: any,
  notify: any
) {
  const response = await requestService.post(
    WATCHLIST,
    token,
    false,
    requestJson
  );
  console.log(response);
  if (response["status"] === 200) {
    setOverlay(0);
  } else if (response["status"] === 409) {
    return notify("A watchlist with this name already exists");
  }
}
