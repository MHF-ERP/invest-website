import React from "react";

export default function Statics(props: { stock: any }) {
  const { stock } = props;
  const data = [
    {
      title1: "Volume Average",
      title2: stock["volAvg"],
    },
    {
      title1: "Price",
      title2: stock["price"],
    },
    {
      title1: "Changes",
      title2: stock["changes"],
    },
    {
      title1: "Change Percentage",
      title2: (stock["changes"] * 100).toFixed(),
    },
    {
      title1: "Symbol",
      title2: stock["symbol"],
    },
    {
      title1: "Range",
      title2: stock["range"],
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
