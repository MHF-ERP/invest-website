"use client";
import Inputs from "@/components/default/inputs";
import React from "react";
import Remember from "./remember.component";
import Link from "next/link";
import requestService from "@/static/requests";
import { testEmail } from "@/functions/validations";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { LOGIN } from "@/static/links";
import { useRouter } from "next/navigation";
import userStore from "@/store/user";
import process from "@/store/process";
import { processStatus } from "@/functions/processStatus";
import signUpObj from "@/store/signUpObj";

export default function Body() {
  const router = useRouter();
  const notify = async (error: string) => toast.error(error);
  const mutation = useMutation({
    mutationFn: (e) => {
      return handelForm(e);
    },
  });
  const { setCount } = process();
  const { updateEmail, updateToken } = signUpObj();
  const { setName } = userStore();
  return (
    <form
      className=" flex flex-col gap-3"
      onSubmit={(e: any) => mutation.mutate(e)}
    >
      <Inputs holder="Enter your email" text="Email" name="LoginEmail" />
      <Inputs holder="......" text="Password" name="LoginPassword" />
      <Remember />
      <button
        disabled={mutation.isPending}
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mb-4 "
      >
        {mutation.isPending ? "Loading" : "Sign in"}
      </button>
      <div className=" flex items-center justify-center gap-1">
        <span className=" text-placeholer text-sm  text-center">
          Don’t have an account?{" "}
        </span>
        <Link
          className=" text-main text-sm font-semibold hover:underline "
          href={"/signup"}
        >
          Sign Up
        </Link>
      </div>
      <ToastContainer />
    </form>
  );
  async function handelForm(e: any) {
    e.preventDefault();
    // get data from form
    const email = e.target.LoginEmail.value;
    const password = e.target.LoginPassword.value;
    const Remember = e.target.Remember.checked;
    // Email Testing
    if (!testEmail(email)) {
      return notify("Invalid Email");
    }
    // Password Validation
    if (password.length === 0) {
      return notify("Password Field is Required");
    }
    // handel request
    const requestJson = JSON.stringify({
      email,
      password,
      fcm: "user",
      socketId: "user",
    });
    // send Request
    const response = await requestService.post(
      LOGIN,
      undefined,
      false,
      requestJson
    );
    console.log(requestJson);
    console.log(response["status"]);
    if (response["status"] === 422) {
      return notify("Incorrect Email or Password");
    } else if (response["status"] === 200) {
      if (response["data"]["data"]["status"] !== "ACTIVE") {
        setCount(processStatus(response["data"]["data"]["status"])!);
        updateEmail(response["data"]["data"]["email"]);
        updateToken(response["data"]["token"]);
        router.replace("/signup");
      } else {
        setName(response["data"]["data"]["name"]);
        router.replace("/home");
      }
    }
  }
}
