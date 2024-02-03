import SearchIcon from "@/icons/search.component";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Search() {
  return (
    <div className="   w-full border  border-[#D0D5DD]  px-2 py-2 text-sm flex gap-2 items-center rounded-md ">
      <SearchIcon color="#667085" />
      <input
        placeholder="Search"
        className="placeholder:text-[16px] placeholder:font-[400] w-full outline-none"
      />
    </div>
  );
}
