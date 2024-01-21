"use client";
import WatchStore from "@/store/watchlist";
import { BsListTask } from "react-icons/bs";
import { TbLayoutGrid } from "react-icons/tb";

import React from "react";

export default function Actions() {
  const { shape, updateSahpe } = WatchStore();
  return (
    <div className=" border border-divider rounded-xl">
      <button
        onClick={() => updateSahpe()}
        className={` p-2 px-3 h-full ${
          shape ? "bg-white text-main2" : "bg-main2 text-white"
        }  rounded-l-xl`}
      >
        {" "}
        <BsListTask className=" text-xl" />{" "}
      </button>
      <button
        onClick={() => updateSahpe()}
        className={` p-2 px-3 h-full ${
          !shape ? "bg-white text-main2" : "bg-main2 text-white"
        } rounded-r-xl`}
      >
        {" "}
        <TbLayoutGrid className=" text-xl" />{" "}
      </button>
    </div>
  );
}
