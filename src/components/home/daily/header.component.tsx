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
    </div>
  );
}
