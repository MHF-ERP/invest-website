import MyImage from "@/components/image";
import TextColor from "@/functions/textColor";
import { GetSymbol } from "@/services/home/indices.service";
import { GetStocks } from "@/services/watchlist/getStocks.service";
import { stocksStore } from "@/store/stocks";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Image from "next/image";
import React from "react";

export default function Recommendations() {
  const { stocks, setStocks } = stocksStore();
  const { data } = useQuery({
    queryKey: ["indices"],
    queryFn: () => GetSymbol(setStocks),

    enabled: stocks === null,
  });

  return (
    <div className=" border border-divider shadow p-[21px] mt-1 rounded-xl flex-1 flex flex-col gap-3 h-fit">
      <h1 className=" font-bold text-main">You may also like</h1>
      <div className=" xl:hidden lg:hidden md:hidden mt-3 justify-between items-center flex">
        {stocks &&
          stocks.slice(0, 6).map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={` gap-2 ${
                  index > 2 ? "hidden" : "flex"
                }  flex-col items-center text-center`}
              >
                <MyImage
                  alt="stock image"
                  width={56}
                  height={56}
                  src={item["image"]}
                  defaultImage="/images/trad.jpg"
                  className=" rounded-lg"
                />
                <div className=" flex flex-col gap-10">
                  <span className=" font-semibold  text-[14px]">
                    {item["companyName"]}
                  </span>
                  <span
                    className={`  text-[14px] ${
                      item["changes"][0] === "+"
                        ? "text-success"
                        : `${
                            item["changes"][0] === "-"
                              ? "text-decrease"
                              : "text-main2"
                          }`
                    }`}
                  >
                    {item["changes"]}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <div className=" xl:flex lg:flex md:flex  mt-[12px] justify-between items-center hidden">
        {stocks &&
          stocks.slice(0, 6).map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center gap-2 px-[12px]`}
              >
                <MyImage
                  alt="stock image"
                  width={56}
                  height={56}
                  src={item["image"]}
                  defaultImage="/images/trad.jpg"
                  className=" rounded-lg"
                />
                <div className=" flex flex-col ">
                  <span className=" font-semibold text-[14px]">
                    {item["companyName"]}
                  </span>
                  <span
                    className={` font-bold text-[14px] ${TextColor(
                      item["changes"][0]
                    )}`}
                  >
                    {item["changes"]}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
