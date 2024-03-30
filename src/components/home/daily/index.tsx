import React from "react";
import Header from "./header.component";
import Card from "../watchlist/card.component";
import { FaArrowTrendUp } from "react-icons/fa6";
import { stocksStore } from "@/store/stocks";

export default function Daily() {
  const { stocks } = stocksStore();
  const data = stocks.slice().sort((a: any, b: any) => b.changes - a.changes);
  const data2 = stocks.slice().sort((a: any, b: any) => a.changes - b.changes);

  return (
    <div className=" flex-1  flex flex-col p-4 border border-divider shadow rounded-xl">
      <Header />
      <div className=" flex w-full gap-6 mt-2 xl:flex-row lg:flex-row md:flex-row flex-col ">
        <div className=" flex gap-2 flex-col w-full ">
          <div
            className=" mb-4  px-2 py-1  flex w-full justify-between items-center rounded-[6px] text-text2"
            style={{ backgroundColor: "#dff4ea" }}
          >
            Gainers
            <FaArrowTrendUp className=" text-text2" />
          </div>
          {data.splice(0, 5).map((item: any, idx: number) => {
            return (
              <>
                <Card item={item} key={idx} />
                {idx + 1 < data.length && <hr className=" border-graph" />}
              </>
            );
          })}
        </div>
        <div className=" flex gap-2 flex-col w-full">
          <div
            className=" mb-4  px-2 py-1  flex w-full justify-between items-center rounded-[6px] text-decrease"
            style={{ backgroundColor: "#FDE6E4" }}
          >
            Losers
            <FaArrowTrendUp className=" text-decrease" />
          </div>
          {data2.slice(0, 5).map((item: any, idx: number) => {
            return (
              <>
                <Card item={item} key={idx} />
                {idx + 1 < data.length && <hr className=" border-graph" />}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
