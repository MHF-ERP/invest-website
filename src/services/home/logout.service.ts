import { LOGOOUT } from "../../static/links";
import requestService from "../../static/requests";
export async function logoutRequest(
  token: string,
  router: any,
  deleteCookie: any
) {
  await requestService.get(LOGOOUT, token);
  deleteCookie("AccessToken");
  router.push("/");
  router.forward();
}
