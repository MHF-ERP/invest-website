import { test } from "@/functions/validations";
import { PERSONAL, WATCHLIST } from "@/static/links";
import requestService from "@/static/requests";

export async function CreateWatchList(
  e: any,
  notify: any,
  token: string | undefined,
  setOverlay: any
) {
  e.preventDefault();
  const listName = e.target.listName.value;

  // **************Test******************
  if (listName.length === 0) {
    return notify("The name field must not be left empty");
  }
  // **************Handel Request******************
  const requestJson = JSON.stringify({
    name: listName,
    symbols: [],
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
  if (response["status"] === 200) {
    setOverlay(0);
  } else if (response["status"] === 409) {
    return notify("A watchlist with this name already exists");
  }
}
