import { WATCHLIST } from "@/static/links";
import requestService from "../../static/requests";
export async function DeleteWatchLists(
  token: string | undefined,
  updateData: any,
  data: Array<{ id: string; name: string; userId: string; Stocks: any[] }>,
  id: string
) {
  const res = await requestService.delete(WATCHLIST + "/" + id, token);
  console.log(res);
  console.log(id);
  console.log(data.filter((e) => e.id !== id));
  updateData(data.filter((e) => e.id !== id));
  // router.replace("/");
}
