import React, { useEffect, useState } from "react";
import Column from "./columns.component";
import WatchStore from "@/store/watchlist";
import ProfileStock from "@/components/home/watchlist/stocks/profile.component";
import Profile from "@/components/profile.component";
import TextColor from "@/functions/textColor";
import Remove from "@/icons/remove.icon";
import { stocksStore } from "@/store/stocks";
import GraphWatchIt from "@/components/home/watchlist/stocks/graphWatchIt.component";
import DeleteLayout from "../popup/deletelayout.component";
import Image from "next/image";

export default function StockTable(props: {
  setOverlay: any;
  setSymbol: any;
  setWatchlistId: any;
}) {
  const { setOverlay, setSymbol, setWatchlistId } = props;
  const { data, tap } = WatchStore();
  const { stocks } = stocksStore();

  useEffect(() => {
    // Fetch data based on tap
  }, [tap]);

  return (
    <div
      className={`rounded-2xl ${
        data[tap] && data[tap].Stocks.length === 0 ? "h-full" : "h-fit"
      }  border border-divider mt-4 overflow-x-auto overflow-y-hidden`}
    >
      {data[tap] && data[tap].Stocks.length > 0 && (
        <table className="w-full" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col className="xl:w-1/4 lg:w-1/4 md:w-1/4 w-[300px]" />
            <col className="xl:w-1/10 lg:w-1/10 md:w-1/10 w-[100px]" />
            <col className="xl:w-1/4 lg:w-1/4 md:w-1/4 w-[300px]" />
            <col className="xl:w-1/6 lg:w-1/6 md:w-1/6 w-[100px]" />
            <col className="xl:w-1/6 lg:w-1/6 md:w-1/6 w-[100px]" />
            <col className="w-1/10" />
          </colgroup>
          <thead className="text-[#475467]">
            <tr>
              <th className="text-start font-semibold py-2 px-4 border-b-2">
                Stocks
              </th>
              <th className="text-start font-semibold py-2 px-4 border-b-2">
                Change1D
              </th>
              <th className="border-b-2" style={{ marginRight: "100px" }}>
                {/* Adjust the style of the third column */}
              </th>
              <th className="text-start font-semibold py-2 px-4 border-b-2">
                Short
              </th>
              <th className="text-start font-semibold py-2 px-4 border-b-2">
                Buy
              </th>
              <th className="border-b-2 px-4"></th>
            </tr>
          </thead>
          <tbody className=" w-full">
            {data[tap] &&
              data[tap].Stocks.length > 0 &&
              data[tap].Stocks.map((e: any, idx: number) => {
                const it = stocks.find((item: any) => item.symbol === e.symbol);

                return (
                  <React.Fragment key={idx}>
                    <tr
                      className={`${
                        idx !== data[tap].Stocks.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      <td className="px-[24px] py-[16px] ">
                        {it && <Profile data={it} />}
                      </td>
                      <td
                        className={`px-[24px] ${
                          idx !== data[tap].Stocks.length - 1
                            ? "border-b-2"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col w-fit items-start text-start">
                          <span
                            className={`${TextColor(
                              it ? (it.changes[0] === "-" ? "-" : "+") : ""
                            )} font-[600] text-[14px]`}
                          >
                            {it && it.changes}
                          </span>
                        </div>
                      </td>
                      <td className="w-full pr-[40px] flex items-center justify-center py-[16px]">
                        {data && (
                          <GraphWatchIt symbol={it.symbol} text={it.changes} />
                        )}
                      </td>
                      <td className="text-[#171D19] px-[0px] py-[16px] font-semibold text-start">
                        42051.94
                      </td>
                      <td className="text-[#171D19] px-[24px] py-[16px] font-semibold text-start">
                        {it && it.price}
                      </td>
                      <td className="px-[24px] py-[16px]">
                        <Remove
                          watchId={data[tap]["id"]}
                          setWatchlistId={setWatchlistId}
                          setOverlay={setOverlay}
                          setSymbol={setSymbol}
                          symbol={it.symbol}
                        />
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      )}
      {data[tap] && data[tap].Stocks.length === 0 && (
        <div className=" w-full h-full  flex items-center justify-center">
          <div className=" w-fit h-fit flex flex-col items-center justify-center">
            <Image
              width={100}
              height={100}
              alt={"empty"}
              src={"/images/empty.png"}
            />
            <h1 className=" text-[#0B0E0C] font-[600] text-[20px]">
              No Stocks yet
            </h1>
            <p className=" text-[#45564B] font-[400] text-[16px]">
              Begin choosing the stocks you want to keep an eye on.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
