import SearchIcon from "@/icons/search.component";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { cn } from "@/lib/cn";

export default function Search(props: { HomeClassName?: string }) {
  const { HomeClassName } = props;
  return (
    <div
      className={cn(
        "   w-full border  border-[#D0D5DD]  px-2 py-2 text-sm flex gap-2 items-center rounded-md ",
        HomeClassName
      )}
    >
      <SearchIcon color="#667085" />
      <input
        placeholder="Search"
        className="placeholder:text-[16px] placeholder:font-[400] w-full outline-none"
      />
    </div>
  );
}
