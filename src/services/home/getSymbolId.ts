import { API_KEY } from "../../../secrets";
import { PROFILE, profileUrl } from "../../static/links";
import requestService from "../../static/requests";

export async function GetSymbolId(setProp: any, id: string) {
  const response = await requestService.get(
    profileUrl + `/${id}?apikey=${API_KEY}`
  );
  return response.data[0];
  // router.replace("/");
}
