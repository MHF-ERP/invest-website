import Inputs from "@/components/default/inputs";
import { testEmail, testPasswword } from "@/functions/validations";
import requestService from "@/static/requests";
import process from "@/store/process";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { toast } from "react-toastify";
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
    </form>
  );
  async function handel(e: any) {
    e.preventDefault();
    // get data from form
    const email = e.target.SignupEmail.value;
    const password = e.target.SignupPassword.value;
    // Email Testing
    if (!testEmail(email)) {
      return notify("Invalid Email");
    }
    // Password Validation
    if (password.length === 0) {
      return notify("Password Field is Required");
    }
    if (error.length !== 0) {
      return notify("password does not meet the specified constraints");
    }
    // handel request
    const requestJson = JSON.stringify({
      email,
      password,
    });
    // send Request
    const response = await requestService.post(
      SIGNUP,
      undefined,
      false,
      requestJson
    );
    if (response["status"] === 409) {
      return notify("Email Already Exist");
    } else if (response["status"] === 200) {
      await updateEmail(response["data"]["data"]["email"]);
      await updateToken(response["data"]["token"]);
      increment();
    }
  }
  function handelPassword(e: any) {
    const validPassword = testPasswword(e.target.value);
    if (validPassword) setError(validPassword);
    else setError("");
  }
}
