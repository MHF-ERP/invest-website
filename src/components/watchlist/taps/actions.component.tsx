"use client";
import WatchStore from "@/store/watchlist";
import { BsListTask } from "react-icons/bs";
import { TbLayoutGrid } from "react-icons/tb";

import React from "react";
import ListIcon from "@/icons/list.icon";
import CategoriesIcon from "@/icons/categories.icon";

export default function Actions() {
  const { shape, updateSahpe } = WatchStore();
  return (
    <div className=" border border-divider rounded-xl">
      <button
        onClick={() => updateSahpe()}
        className={` py-[8px] px-[12px]  h-full ${
          shape ? "bg-white text-main2" : "bg-main2 text-white"
        }  rounded-l-xl`}
      >
        {" "}
        <ListIcon color={!shape ? "#FFFFFF" : "#6B8373"} />
      </button>
      <button
        onClick={() => updateSahpe()}
        className={`  py-[8px] px-[12px] h-full ${
          !shape ? "bg-white text-main2" : "bg-main2 text-white"
        } rounded-r-xl`}
      >
        {" "}
        <CategoriesIcon color={shape ? "#FFFFFF" : "#6B8373"} />
      </button>
    </div>
  );
}
