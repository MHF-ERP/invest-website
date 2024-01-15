import Inputs from "@/components/default/inputs";
import { testEmail, testPasswword } from "@/functions/validations";
import requestService from "@/static/requests";
import process from "@/store/process";
import signUpObj from "@/store/signUpObj";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Signup() {
  const { increment } = process();
  const notify = async (error: string) => toast.error(error);
  const [error, setError] = useState<string>("");
  const { updateEmail, updatePassword } = signUpObj();
  return (
    <form className=" flex flex-col gap-3" onSubmit={handel}>
      <Inputs holder="Enter your email" text="Email" name="SignupEmail" />
      <Inputs
        holder="......"
        text="Password"
        name="SignupPassword"
        onChange={handelPassword}
      />
      <div className=" flex gap-1 flex-col">
        <div className=" flex gap-2 items-center">
          <Icon
            icon={`${
              !error.includes("1") ? "icon-park-solid:correct" : "ph:x-bold"
            }`}
            className={`${!error.includes("1") ? "text-p" : "text-red-500"}`}
          />
          <p className=" text-p text-sm">
            Password must be at least 12 characters.
          </p>
        </div>
        <div className=" flex gap-2 items-center">
          <Icon
            icon={`${
              !error.includes("2") ? "icon-park-solid:correct" : "ph:x-bold"
            }`}
            className={`${!error.includes("2") ? "text-p" : "text-red-500"}`}
          />
          <p className=" text-p text-sm">
            Include at least one uppercase letter.
          </p>
        </div>
        <div className=" flex gap-2 items-center  ">
          <Icon
            icon={`${
              !error.includes("3") ? "icon-park-solid:correct" : "ph:x-bold"
            }`}
            className={`${!error.includes("3") ? "text-p" : "text-red-500"}`}
          />
          <p className=" text-p text-sm">
            Must contain one special character (!, @, #, $, %).
          </p>
        </div>
      </div>

      <button
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
        onClick={() => increment()}
      >
        Continue
      </button>
      <ToastContainer />
    </form>
  );
  async function handel(e: any) {
    e.preventDefault();
    // get data from form
    const Email = e.target.SignupEmail.value;
    const Password = e.target.SignupPassword.value;
    // Email Testing
    if (!testEmail(Email)) {
      return notify("Invalid Email");
    }
    // Password Validation
    if (Password.length === 0) {
      return notify("Password Field is Required");
    }
    if (error.length !== 0) {
      return notify("password does not meet the specified constraints");
    }
    updateEmail(Email);
    updatePassword(Password);
  }
  function handelPassword(e: any) {
    const validPassword = testPasswword(e.target.value);
    if (validPassword) setError(validPassword);
    else setError("");
  }
}
