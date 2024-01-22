import { codeVerification } from "@/functions/validations";
import { toast } from "react-toastify";

export default async function verificationServices(
  e: any,
  code: string,
  inc: any
) {
  e.preventDefault();

  if (!codeVerification(code)) {
    const notify = async (error: string) => toast.error(error);
    return notify("Verification code cannot be less than 4 digits");
  }

  const requestJson = JSON.stringify({
    otp: code,
  });
  inc();
}
