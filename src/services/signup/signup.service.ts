import requestService from "@/static/requests";
import { SIGNUP } from "@/static/links";
import { test, testPasswwordWithNotify } from "@/functions/validations";
import { toast } from "react-toastify";

export default async function signupService(
  e: any,
  updateEmail: any,
  updateToken: any,
  increment: any
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
      increment
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
  increment: any
) => {
  const notify = async (error: string) => toast.error(error);

  // **************conflict Email******************
  if (status === 409) {
    return notify("Email Already Exist");
  }
  // **************valid Data******************
  else if (status === 200) {
    updateEmail(data["data"]["email"]);
    updateToken(data["token"]);
    increment();
  }
};
