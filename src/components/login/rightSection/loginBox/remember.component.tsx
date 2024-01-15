import Link from "next/link";
import React from "react";

export default function Remember() {
  return (
    <div className=" flex w-full justify-between items-center">
      <div className="flex items-center w-fit  justify-center ">
        <input
          name="Remember"
          id="disabled-checked-checkbox"
          type="checkbox"
          value=""
          className="w-3 h-3 text-main accent-main bg-gray-100 border-gray-300 rounded focus:main"
        />
        <label
          htmlFor="disabled-checked-checkbox"
          className="ms-2 mt-1  text-xs font-medium text-textInput"
        >
          Remember for 30 days
        </label>
      </div>
      <Link
        href={"ForgetPassword"}
        className=" hover:underline font-bold text-main text-xs "
      >
        Forgot Password?
      </Link>
    </div>
  );
}
