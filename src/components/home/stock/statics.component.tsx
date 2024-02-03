import React from "react";

export default function Statics() {
  const data = [
    {
      title1: "Market Cap",
      title2: "1.35T",
    },
    {
      title1: "Price/Earnings",
      title2: "7.38x",
    },
    {
      title1: "EPS",
      title2: "11.60",
    },
    {
      title1: "Value Today",
      title2: "111.33m",
    },
    {
      title1: "Dividend Yield",
      title2: "8.18",
    },
    {
      title1: "Avg. Traded Value",
      title2: "74.30m",
    },
  ];
  return (
    <div className=" border border-divider shadow p-[21px] rounded-xl flex-1 h-fit">
      <h1 className=" font-bold text-main">Statistics</h1>
      <div className=" flex flex-col gap-3 mt-3">
        {data.map((item: any, idx: number) => {
          return (
            <div
              key={idx}
              className=" flex w-full justify-between items-center"
            >
              <span style={{ color: "#6B8373" }}>{item["title1"]}</span>
              <span style={{ color: "#0B1813" }}>{item["title2"]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
