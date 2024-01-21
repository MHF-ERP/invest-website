import Inputs from "@/components/default/inputs";
import { test } from "@/functions/validations";
import { FORGET } from "@/static/links";
import requestService from "@/static/requests";
import forgetStore from "@/store/forget";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

export default function Forget() {
  const notify = async (error: string) => toast.error(error);
  const mutation = useMutation({
    mutationFn: (e) => {
      return handel(e);
    },
  });
  const { email, count, increment, updateEmail } = forgetStore();
  return (
    <form
      className=" flex flex-col gap-3 items-center"
      onSubmit={(e: any) => mutation.mutate(e)}
    >
      <Inputs
        text="Email"
        holder="Enter your email"
        name="forgetEmail"
        value={email}
        onChange={(e: any) => updateEmail(e.target.value)}
      />{" "}
      <button
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        {mutation.isPending ? "Loading" : "Continue"}
      </button>
      <ToastContainer />
    </form>
  );
  async function handel(e: any) {
    e.preventDefault();
    //************* Get Data From Form*************** */
    const email = e.target.forgetEmail.value;
    // **************Test******************
    if (test("Email", email, "The email entered is invalid")) {
      return;
    }
    // **************Handel Request******************
    const requestJson = JSON.stringify({
      email,
    });
    // **************Send Request******************
    const response = await requestService.post(
      FORGET,
      undefined,
      false,
      requestJson
    );
    // **************handel Response******************
    handelResponse(response["status"], response["data"]);
  }
  function handelResponse(status: number, data: any) {
    // **************conflict Email******************
    if (status === 422) {
      return notify("Email Not Found");
    }
    // **************valid Data******************
    else if (status === 200) {
      updateEmail(email);
      increment();
    }
  }
}
