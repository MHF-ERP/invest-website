import { API_KEY } from "../../../secrets";
import { UP, DOWN } from "../../static/links"; // Add DOWN to your links
import requestService from "../../static/requests";

export async function GetAllAi(
  market: string,
  setDataUp: any,
  setDataDown: any,
  all?: boolean,
  setOriginData?: any,
  setData?: any
) {
  try {
    // Fetch UP (growth) data
    const upResponse = await fetch(UP + API_KEY);
    if (!upResponse.ok) throw new Error("Failed to fetch UP data");
    const upData = await upResponse.json();
    console.log("Ups:", upData);
    setDataUp(upData);

    // Optional: store full up data
    if (all && setOriginData && setData) {
      setOriginData(upData);
      setData(upData);
    }

    // Fetch DOWN (contraction) data
    const downResponse = await fetch(DOWN + API_KEY);
    if (!downResponse.ok) throw new Error("Failed to fetch DOWN data");
    const downData = await downResponse.json();
    console.log("Downs:", downData);
    setDataDown(downData);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
