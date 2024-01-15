import Inputs from "@/components/default/inputs";
import useStore from "@/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
export default function Signup() {
  const { increment } = useStore();

  return (
    <form className=" flex flex-col gap-3">
      <Inputs holder="Enter your email" text="Email" />
      <Inputs holder="......" text="Password" />
      <div className=" flex gap-1 flex-col">
        <div className=" flex gap-2 items-center">
          <Icon icon={"icon-park-solid:correct"} className=" text-p" />
          <p className=" text-p text-sm">
            Password must be at least 12 characters.
          </p>
        </div>
        <div className=" flex gap-2 items-center">
          <Icon icon={"icon-park-solid:correct"} className=" text-p" />
          <p className=" text-p text-sm">
            Include at least one uppercase letter.
          </p>
        </div>
        <div className=" flex gap-2 items-center  ">
          <Icon icon={"icon-park-solid:correct"} className=" text-p" />
          <p className=" text-p text-sm">
            Must contain one special character (!, @, #, $, %).
          </p>
        </div>
      </div>

      <button
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
        onClick={() => increment()}
      >
        Continue
      </button>
    </form>
  );
}
