import { API_KEY } from "../../../secrets";
import { PREDECT } from "../../static/links";
import requestService from "../../static/requests";

export async function GetAllAi(
  market: string,
  setDataUp: any,
  setDataDown: any,
  all?: boolean,
  setOriginData?: any,
  setData?: any
) {
  console.log("-----------------------------");
  console.log(market);
  await fetch(PREDECT + market.toLowerCase())
    .then((response) => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the response body as JSON
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const dataArray = Object.keys(data["predictions"]).map((key) => ({
        id: key,
        prediction: data["predictions"][key].prediction,
        probability: (data["predictions"][key].probability * 100).toFixed(),
      }));
      if (all) {
        setOriginData(dataArray);
        setData(dataArray);
      }
      // Do something with the JSON data
      const Up = dataArray.filter((item) => item.prediction === "Up");
      const Down = dataArray.filter((item) => item.prediction === "Down");

      Up.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
      Down.sort(
        (a, b) => parseFloat(a.probability) - parseFloat(b.probability)
      );
      setDataUp(Up);
      setDataDown(Down);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });
  // router.replace("/");
}
