import { STOCKS_DATA } from "@/static/stocks";
import { API_KEY } from "../../../secrets";
import { AISERVER, PREDECT, PROFILE, profileUrl } from "../../static/links";
import requestService from "../../static/requests";
async function getData(setProp: any, id: string) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  await fetch(proxyUrl + AISERVER + "/predict_stock?symbol=" + id)
    .then((response) => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the response body as JSON
      return response.json();
    })
    .then((data) => {
      if (data["prediction"] === "Down")
        setProp("-" + (data["probability"] * 100).toFixed());
      else setProp((data["probability"] * 100).toFixed());
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });
}
export async function GetSymbolId(setProp: any, id: string) {
  await getData(setProp, id);
  const response = await requestService.get(
    profileUrl + `/${id}?apikey=${API_KEY}`
  );
  return response.data[0];
  // router.replace("/");
}
