"use client";
import Inputs from "@/components/default/inputs";
import React from "react";
import Remember from "./remember.component";
import Link from "next/link";
import requestService from "@/static/requests";
import { testEmail } from "@/functions/validations";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Body() {
  const notify = async (error: string) => toast.error(error);

  return (
    <form className=" flex flex-col gap-3" onSubmit={handelForm}>
      <Inputs holder="Enter your email" text="Email" name="LoginEmail" />
      <Inputs holder="......" text="Password" name="LoginPassword" />
      <Remember />
      <button
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mb-4 "
      >
        Sign in
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
    const Email = e.target.LoginEmail.value;
    const Password = e.target.LoginPassword.value;
    const Remember = e.target.Remember.checked;
    // Email Testing
    if (!testEmail(Email)) {
      return notify("Invalid Email");
    }
    // Password Validation
    if (Password.length === 0) {
      return notify("Password Field is Required");
    }
    // handel request
    const requestJson = JSON.stringify({
      Email,
      Password,
      Remember,
    });
    // send Request
    const response = await requestService.post("/api/auth/signin", requestJson);
    if (response["status"] === 400) {
      return notify("Incorrect Email or Password");
    }
  }
}
