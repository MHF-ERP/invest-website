"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Search() {
  return (
    <div className=" xl:w-60 lg:w-60 md:w-60 w-full border  border-input  px-2 py-2 text-sm flex gap-2 items-center rounded-md ">
      <Icon icon={"iconamoon:search"} className=" text-input text-lg" />
      <input
        placeholder="Search"
        className="placeholder:text-placeholder placeholder:text-sm outline-none"
      />
    </div>
  );
}
