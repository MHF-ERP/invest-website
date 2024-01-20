import Inputs from "@/components/default/inputs";
import { test, testEmail, testPasswword } from "@/functions/validations";
import requestService from "@/static/requests";
import process from "@/store/process";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import Constrains from "../constrains.component";
import { SIGNUP } from "@/static/links";
import signUpObj from "@/store/signUpObj";

export default function Signup() {
  const mutation = useMutation({
    mutationFn: (e) => {
      return handel(e);
    },
  });
  const { increment } = process();
  const { updateEmail, updateToken } = signUpObj();

  const notify = async (error: string) => toast.error(error);
  const [error, setError] = useState<string>("");
  return (
    <form
      className=" flex flex-col gap-3"
      onSubmit={(e: any) => mutation.mutate(e)}
    >
      <Inputs holder="Enter your email" text="Email" name="SignupEmail" />
      <Inputs
        holder="......"
        text="Password"
        name="SignupPassword"
        onChange={handelPassword}
      />
      <Constrains error={error} />

      <button
        disabled={mutation.isPending}
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
    const email = e.target.SignupEmail.value;
    const password = e.target.SignupPassword.value;
    // **************Test******************
    if (
      test("Email", email, "The email entered is invalid") ||
      test("Password", password, "The password field is required")
    ) {
      return;
    }
    // **************Handel Request******************
    const requestJson = JSON.stringify({
      email,
      password,
    });
    // **************Send Request******************
    const response = await requestService.post(
      SIGNUP,
      undefined,
      false,
      requestJson
    );
    // **************handel Response******************
    handelResponse(response["status"], response["data"]);
  }
  function handelResponse(status: number, data: any) {
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
  }
  function handelPassword(e: any) {
    const validPassword = testPasswword(e.target.value);
    if (validPassword) setError(validPassword);
    else setError("");
  }
}
