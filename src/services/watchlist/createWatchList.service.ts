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
  console.log("hi");
  console.log(token);
  // **************Test******************
  if (listName.length === 0) {
    console.log("error");
    return notify("name must be greater than 0 characters");
  }
  // **************Handel Request******************
  const requestJson = JSON.stringify({
    name: listName,
    symbols: [],
  });
  // **************Send Request******************
  await request(requestJson, token!, setOverlay);
}
async function request(requestJson: string, token: string, setOverlay: any) {
  const response = await requestService.post(
    WATCHLIST,
    token,
    false,
    requestJson
  );
  if (response["status"] === 200) {
    setOverlay(0);
  }
}
