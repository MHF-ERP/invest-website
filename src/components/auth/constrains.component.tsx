import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Constrains(props: { error: string }) {
  const { error } = props;
  return (
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
  );
}
