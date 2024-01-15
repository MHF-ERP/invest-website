import Inputs from "@/components/default/inputs";
import React from "react";
import Remember from "./remember.component";
import Link from "next/link";

export default function Body() {
  return (
    <form className=" flex flex-col gap-3">
      <Inputs holder="Enter your email" text="Email" />
      <Inputs holder="......" text="Password" />
      <Remember />
      <button className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mb-4 ">
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
    </form>
  );
}
