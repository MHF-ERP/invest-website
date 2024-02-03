import PopLayout from "@/components/layouts/pop.layout";
import React from "react";
import Header from "@/components/watchlist/popup/header.component";
import XIcon from "@/icons/x.icon";
import Add from "./cards.component.tsx/add.component";

export default function DeleteList(props: { setOverlay: any }) {
  const { setOverlay } = props;
  return (
    <PopLayout>
      <div className=" flex justify-between items-start">
        <Header
          title="Add to Watchlist"
          brief="Add the stock to your chosen list."
        />
        <XIcon color="#98A2B3" setOverlay={setOverlay} />
      </div>

      <div className="w-full h-fit mt-20px flex flex-col gap-[12px]  mt-[20px] overflow-y-auto">
        <Add without />
        <Add without />
        <Add without />

        <Add without />
      </div>
    </PopLayout>
  );
}
