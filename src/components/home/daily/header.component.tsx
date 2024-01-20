import React from "react";

export default function Header() {
  return (
    <div className=" flex justify-between items-center">
      <div className=" mb-2">
        <h1 className=" text-main font-bold">Daily Movers</h1>
        <p className=" text-placeholer xl:w-fit lg:w-fit  md:w-64 w-32 text-sm">
          Today’s biggest gainers and losers.
        </p>
      </div>
      <div
        className=" xl:text-base lg:text-base md:text-base text-xs w-fit flex items-center justify-center rounded-2xl px-4 py-2 cursor-pointer"
        style={{ border: "1px solid #D0D5DD", color: "#344054" }}
      >
        View all
      </div>
    </div>
  );
}
