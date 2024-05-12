import React from "react";

export default function Statics(props: { stock: any; loading?: boolean }) {
  const { stock, loading } = props;
  const data = [
    {
      title1: "Volume Average",
      title2: !loading ? stock["volAvg"] : "",
    },
    {
      title1: "Price",
      title2: !loading ? stock["price"] + " " + stock["currency"] : "",
    },
    {
      title1: "Changes",
      title2: !loading ? stock["changes"] : "",
    },
    {
      title1: "Change Percentage",
      title2: !loading ? (stock["changes"] * 100).toFixed() : "",
    },
    {
      title1: "Symbol",
      title2: !loading ? stock["symbol"] : "",
    },
    {
      title1: "Range",
      title2: !loading ? stock["range"] : "",
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
