import { PROFILE } from "../../static/links";
import requestService from "../../static/requests";
export async function profileRequest(token: string) {
  const response = await requestService.get(PROFILE, token);
  return response;
  // router.replace("/");
}
