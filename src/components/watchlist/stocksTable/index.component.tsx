import React from "react";
import Column from "./columns.component";
import WatchStore from "@/store/watchlist";

export default function StockTable() {
  const { data, tap } = WatchStore();
  return (
    <div
      className=" w-full  rounded-2xl border border-divider mt-4 "
      style={{ borderCollapse: "collapse" }}
    >
      <table className=" w-full ">
        <thead className=" w-full text-[#475467]">
          <tr style={{ width: "100%" }} className="  ">
            <th className=" w-[40%]  text-start flex-1 text-[12px] text-[#475467] font-semibold py-[12px] px-[24px] border-b-2">
              Markets
            </th>
            <th className=" text-start w-[10%] text-[12px] text-[#475467] font-semibold py-[12px] px-[24px] border-b-2">
              Change1D
            </th>
            <th className=" border-b-2 w-[20%]"></th>

            <th className="w-[10%] border-b-2 text-start text-[12px] text-[#475467] font-semibold py-[12px] px-[24px]">
              Short
            </th>
            <th className="w-[10%] border-b-2 text-start text-[12px] text-[#475467] font-semibold py-[12px] px-[24px]">
              buy
            </th>

            <th className=" w-[10%] border-b-2 px-8"></th>
          </tr>
        </thead>
        <tbody className=" w-full ">
          {data[tap].Stocks.map((e, idx: number) => {
            return <Column key={idx} item={e.symbol} last={false} />;
          })}

          {/* <hr className=" border-p w-screen" /> */}

          {/* <Column last={true} /> */}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}
