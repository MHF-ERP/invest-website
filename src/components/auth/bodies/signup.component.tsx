import Inputs from "@/components/default/inputs";
import { testPasswword } from "@/functions/validations";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import Constrains from "../constrains.component";
import signupService from "@/services/signup/signup.service";
import { signUpObj } from "@/store/signUpObj";
import { process } from "@/store/process";

export default function Signup() {
  const { updateEmail, updateToken } = signUpObj();
  const { increment } = process();

  const mutation = useMutation({
    mutationFn: (e) => {
      return signupService(e, updateEmail, updateToken, increment);
    },
  });
  const [error, setError] = useState<string>("");
  return (
    <form
      className=" flex flex-col gap-3"
      onSubmit={(e: any) => {
        e.preventDefault();
        mutation.mutate(e);
      }}
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

  function handelPassword(e: any) {
    const validPassword = testPasswword(e.target.value);
    if (validPassword) setError(validPassword);
    else setError("");
  }
}
