import { codeVerification } from "@/functions/validations";
import { VERIFY, VERIFY_FORGOT_PASSWORD } from "@/static/links";
import requestService from "@/static/requests";
import { toast } from "react-toastify";

export default async function verificationServices(
  e: any,
  otp: string,
  inc: any,
  token: string,
  isNew?: boolean,
  email?: string
) {
  e.preventDefault();

  if (!codeVerification(otp)) {
    const notify = async (error: string) => toast.error(error);
    return notify("Verification code cannot be less than 4 digits");
  }

  const requestJson = JSON.stringify({
    email: email ? email : undefined,
    otp,
  });

  try {
    const response = await requestService.post(
      isNew ? VERIFY : VERIFY_FORGOT_PASSWORD,
      token,
      false,
      requestJson
    );

    await handleResponse(response.status, response.data, inc);
  } catch (error) {
    console.error("Error handling request:", error);
  }
}

export const handleResponse = (status: number, data: any, increment: any) => {
  const notify = async (error: string) => toast.error(error);

  // **************conflict Email******************
  if (status === 409) {
    return notify("Email Already Exist");
  }
  if (status === 401) {
    return notify("Invalid OTP");
  }
  // **************valid Data******************
  else if (status === 200) {
    increment();
  }
};
