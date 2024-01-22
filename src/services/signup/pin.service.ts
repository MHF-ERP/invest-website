import { PIN } from "@/static/links";
import requestService from "@/static/requests";
import { toast } from "react-toastify";

export async function pinService(
  e: any,
  code: string,
  router: any,
  token: string,
  updateCity: any,
  updateCountry: any,
  updateEmail: any,
  updatePhone: any,
  updateLastName: any,
  updateImg: any,
  updateNationalId: any,
  updateToken: any,
  updateFirstName: any
) {
  const notify = async (error: string) => toast.error(error);

  if (!code) {
    return notify("Please provide a 4-digit pin");
  }

  // handle request
  const requestJson = JSON.stringify({
    pinCode: code,
  });

  // send Request
  try {
    const response = await requestService.post(PIN, token, false, requestJson);

    if (response.status === 200) {
      updateCity("");
      updateCountry("Select a Country");
      updateEmail("");
      updatePhone("");
      updateLastName("");
      updateImg("");
      updateNationalId("");
      updateToken("");
      updateFirstName("");
      router.replace("/");
    }
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
    notify("An error occurred");
  }
}
