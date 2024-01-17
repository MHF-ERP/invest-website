"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Search() {
  return (
    <div className=" w-60 border  border-input  px-2 py-2 text-sm flex gap-2 items-center rounded-md ">
      <Icon icon={"iconamoon:search"} className=" text-input text-lg" />
      <input
        placeholder="Search"
        className="placeholder:text-placeholder placeholder:text-sm outline-none"
      />
    </div>
  );
}
