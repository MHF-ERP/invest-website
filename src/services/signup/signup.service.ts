import requestService from "@/static/requests";
import { MEDIA, SIGNUP } from "@/static/links";
import { test, testPasswwordWithNotify } from "@/functions/validations";
import { toast } from "react-toastify";
import { processStatus } from "@/functions/processStatus";
import resendVerificationServices from "./resend.service";

export default async function signupService(
  e: any,
  updateEmail: any,
  updateToken: any,
  increment: any,
  setCount: any,
  updateFirstName: any,
  updateLastName: any,
  updatePhone: any,
  updateCountry: any,
  updateCity: any,
  updateImg: any,
  updateNationalId: any,
  router: any
) {
  e.preventDefault();
  const email = e.target.SignupEmail.value;
  const password = e.target.SignupPassword.value;
  if (
    test("Email", email, "The email entered is invalid") ||
    test("Password", password, "The password field is required") ||
    testPasswwordWithNotify(password) !== "valid"
  ) {
    return;
  }

  const requestJson = JSON.stringify({
    email,
    password,
  });
  try {
    const response = await requestService.post(
      SIGNUP,
      undefined,
      false,
      requestJson
    );

    await handleResponse(
      response.status,
      response.data,
      updateEmail,
      updateToken,
      increment,
      setCount,
      updateFirstName,
      updateLastName,
      updatePhone,
      updateCountry,
      updateCity,
      updateImg,
      updateNationalId,
      router
    );
  } catch (error) {
    console.error("Error handling request:", error);
  }
}

export const handleResponse = (
  status: number,
  data: any,
  updateEmail: any,
  updateToken: any,
  increment: any,
  setCount: any,
  updateFirstName: any,
  updateLastName: any,
  updatePhone: any,
  updateCountry: any,
  updateCity: any,
  updateImg: any,
  updateNationalId: any,
  router: any
) => {
  const notify = async (error: string) => toast.error(error);

  // **************conflict Email******************
  if (status === 409) {
    return notify("Email Already Exist");
  }
  // **************valid Data******************
  else if (status === 200) {
    if (data["data"]["status"] !== "ACTIVE") {
      setCount(processStatus(data["data"]["status"])!);

      if (processStatus(data["data"]["status"]) === 1)
        resendVerificationServices(data["data"]["email"]);
      updateEmail(data["data"]["email"]);
      updateToken(data["token"]);
      updateFirstName(data["data"]["name"]?.split(" ")?.at(0));
      updateLastName(data["data"]["name"]?.split(" ")?.pop());
      updatePhone(data["data"]["phone"]);
      updateCountry(
        data["data"]["country"] === null
          ? "Select a Country"
          : data["data"]["country"]
      );
      updateCity(
        data["data"]["city"] === null ? "Select a City" : data["data"]["city"]
      );
      updateImg(data["data"]["idImage"] ? MEDIA + data["data"]["idImage"] : "");
      updateNationalId(data["data"]["nationalId"]);
      router.replace("/signup");
    } else {
      updateEmail(data["data"]["email"]);
      updateToken(data["token"]);
      increment();
    }
  }
};
