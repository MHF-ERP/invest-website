import { stocksStore } from "@/store/stocks";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function StockPop(props: {
  current?: boolean;
  item: any;
  cliked: any;
  setCliked: any;
}) {
  const { cliked, setCliked } = props;
  const { current, item } = props;
  const { stocks, setStocks } = stocksStore();

  return (
    <div
      onClick={() => {
        // Check if the item is not already in the clicked array
        if (!cliked.includes(item["symbol"])) {
          // Add the item to the clicked array
          setCliked([...cliked, item["symbol"]]);
        } else {
          // erase the item to the clicked array
          setCliked(cliked.filter((symbol: any) => symbol !== item["symbol"]));
        }
      }}
      className={`${
        cliked.includes(item["symbol"])
          ? "border-[#2E644E]"
          : "border-[#EAECF0]"
      } rounded-[12px] flex gap-[12px] cursor-pointer items-center border-[2px] p-[12px]`}
    >
      <div className="w-full items-center gap-2 flex flex-row">
        <div className="flex items-center w-[16px] h-[16px] p-[2px] justify-center">
          <input
            name="Remember"
            id="disabled-checked-checkbox"
            type="checkbox"
            value=""
            checked={cliked.includes(item["symbol"])}
            className={`text-[#2E644E] accent-[#2E644E] rounded-[4px] bg-gray-100 border-gray-300 focus:main`}
          />
        </div>
        <div className="flex gap-2">
          <Image
            src={item["image"] ? item["image"] : "/images/trad.jpg"}
            width={40}
            height={40}
            alt="Stock Image"
            className="rounded-[6px]"
            onError={() => {
              const data = stocks.slice();
              data.find((stock: any) => stock.symbol === item.symbol)["image"] =
                "/images/trad.jpg";
              setStocks(data);
            }}
          />
          <div className="flex-1 flex-col gap-1 flex">
            <span className="font-[600] text-[14px] text-[#344054]">
              {item["companyName"]}
            </span>
            <span className="font-[400] text-[14px] text-[#475467]">
              {item["industry"]}
            </span>
          </div>
        </div>
      </div>
      <span className="text-[#171D19] font-[600] text-[16px]">
        {item["price"].toFixed(2)}
      </span>
    </div>
  );
}
