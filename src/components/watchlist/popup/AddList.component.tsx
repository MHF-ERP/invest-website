import PopLayout from "@/components/layouts/pop.layout";
import React from "react";
import Header from "@/components/watchlist/popup/header.component";
import XIcon from "@/icons/x.icon";
import Add from "./cards.component.tsx/add.component";

export default function AddList(props: { setOverlay: any }) {
  const { setOverlay } = props;
  return (
    <PopLayout>
      <div className=" flex justify-between items-start">
        <Header
          title="Add to Watchlist"
          brief="Add the stock to your chosen list."
        />
        <XIcon color="#98A2B3" />
      </div>

      <div className="w-full h-fit mt-20px flex flex-col gap-[12px]  mt-[20px] overflow-y-auto">
        <Add current />
        <Add />
        <Add />

        <Add />
      </div>
      <div className=" mt-[20px] flex justify-between items-center gap-[6px]">
        <button className=" bg-white border border-[#D0D5DD] rounded-[8px] shad py-[10px] px-[16px] flex-1 ">
          Cancel
        </button>
        <button className=" bg-[#2E644E] text-white border border-[#D0D5DD] rounded-[8px] shad py-[10px] px-[16px] flex-1 ">
          Add
        </button>
      </div>
    </PopLayout>
  );
}
