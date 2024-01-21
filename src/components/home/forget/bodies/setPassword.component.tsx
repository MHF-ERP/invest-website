import Constrains from "@/components/auth/constrains.component";
import Inputs from "@/components/default/inputs";
import { test, testPasswword } from "@/functions/validations";
import { FORGET, RESET } from "@/static/links";
import requestService from "@/static/requests";
import forgetStore from "@/store/forget";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function SetPassword() {
  const [error, setError] = useState<string>("");

  const notify = async (error: string) => toast.error(error);
  const mutation = useMutation({
    mutationFn: (e) => {
      return handel(e);
    },
  });
  const { increment, email } = forgetStore();
  return (
    <form
      className=" flex flex-col gap-3"
      onSubmit={(e: any) => mutation.mutate(e)}
    >
      <Inputs
        holder="......"
        text="Password"
        name="forgetPassword"
        onChange={handelPassword}
      />
      <Inputs
        holder="......"
        text="confirm Password"
        name="confirmForgetPassword"
      />
      <Constrains error={error} />

      <button
        disabled={mutation.isPending}
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        {mutation.isPending ? "Loading" : "Reset password"}
      </button>
      <ToastContainer />
    </form>
  );
  async function handel(e: any) {
    e.preventDefault();
    //************* Get Data From Form*************** */
    const password = e.target.forgetPassword.value;
    const confirmPassword = e.target.confirmForgetPassword.value;

    // **************Test******************
    if (
      test("Password", password, "The password field is required") ||
      test(
        "Password",
        confirmPassword,
        "The confirm password field is required"
      )
    ) {
      return;
    }
    if (error.length > 0) {
      return notify("Password not matxh the constrains");
    }
    if (password !== confirmPassword) {
      return notify("Passwords not match");
    }
    // **************Handel Request******************
    const requestJson = JSON.stringify({
      email,
      password,
    });
    // **************Send Request******************
    const response = await requestService.post(
      RESET,
      undefined,
      false,
      requestJson
    );
    // **************handel Response******************

    handelResponse(response["status"], response["data"]);
  }
  function handelResponse(status: number, data: any) {
    // **************valid Data******************
    if (status === 200) {
      // updateEmail(data["data"]["email"]);
      increment();
    }
  }
  function handelPassword(e: any) {
    const validPassword = testPasswword(e.target.value);
    if (validPassword) setError(validPassword);
    else setError("");
  }
}
