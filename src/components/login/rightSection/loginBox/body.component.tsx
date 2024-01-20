"use client";
import Inputs from "@/components/default/inputs";
import React from "react";
import Remember from "./remember.component";
import Link from "next/link";
import requestService from "@/static/requests";
import { test, testEmail, testPasswword } from "@/functions/validations";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { LOGIN, MEDIA } from "@/static/links";
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
  const {
    updateEmail,
    updateToken,
    updateFirstName,
    updateLastName,
    updatePhone,
    updateCountry,
    updateCity,
    updateImg,
    updateNationalId,
  } = signUpObj();
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
    //************* Get Data From Form*************** */
    const email = e.target.LoginEmail.value;
    const password = e.target.LoginPassword.value;
    const Remember = e.target.Remember.checked;
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
      fcm: "user",
      socketId: "user",
    });
    // **************Send Request******************
    const response = await requestService.post(
      LOGIN,
      undefined,
      false,
      requestJson
    );
    // **************handel Response******************

    handelResponse(response["status"], response["data"]);
  }

  function handelResponse(status: number, data: any) {
    // **************Invalid Credintial******************
    if (status === 422) {
      return notify("The email or password provided is incorrect.");
    }
    // **************Valid Credintial and User not Active******************
    else if (status === 200) {
      if (data["data"]["status"] !== "ACTIVE") {
        setCount(processStatus(data["data"]["status"])!);
        updateEmail(data["data"]["email"]);
        updateToken(data["token"]);
        updateFirstName(data["data"]["name"].split(" ")[0]);
        updateLastName(data["data"]["name"].split(" ").pop());
        updatePhone(data["data"]["phone"]);
        updateCountry(data["data"]["country"]);
        updateCity(data["data"]["city"]);
        updateImg(
          data["data"]["idImage"] ? MEDIA + data["data"]["idImage"] : ""
        );
        updateNationalId(data["data"]["nationalId"]);
        router.replace("/signup");
      }
      // **************Valid Credintial and User Active******************
      else {
        setName(data["data"]["name"]);
        document.cookie = `AccessToken=${data["token"]}; path=/`;
        router.replace("/home");
      }
    }
  }
}
