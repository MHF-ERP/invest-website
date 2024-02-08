import { RESEND } from "@/static/links";
import requestService from "@/static/requests";
import { toast } from "react-toastify";

export default async function resendVerificationServices(email?: string) {
  try {
    const response = await requestService.post(RESEND, undefined, false, {
      email,
    });
    if (response.status !== 200) {
      const notify = async (error: string) => toast.error(error);
      return notify("Too many attempts, please try again later");
    }
  } catch (error) {
    console.error("Error handling request:", error);
  }
}
