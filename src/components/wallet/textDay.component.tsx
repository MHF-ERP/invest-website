import { formatDate2 } from "@/functions/formatDate";
import { FormatDateWithNames } from "@/functions/formatDateWithNames";
import { GetStockDetails } from "@/services/wallet/getStockDetails";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import React from "react";

export default function TextDay(props: {
  item: any;
  item2: any;
  details: boolean;
}) {
  const { item, item2, details } = props;
  const { data, isLoading } = useQuery({
    queryKey: ["Stock Details"],
    queryFn: () => GetStockDetails(getCookie("AccessToken")!, item.symbol),

    enabled: true,
  });
  const details_items_box1 = [
    {
      title1: "First Bought",
      title2: !isLoading && FormatDateWithNames(data["firstBought"]),
    },
    {
      title1: "Last Buy Price",
      title2: !isLoading && data["lastBuy"]["price"] + " " + item2["currency"],
    },
    {
      title1: "Last Buy Date",
      title2: !isLoading && FormatDateWithNames(data["lastBuy"]["date"]),
    },
    {
      title1: "Last Sell Price",
      title2: !isLoading && data["lastBuy"]["price"] + " " + item2["currency"],
    },
    {
      title1: "Last Sell Date",
      title2: !isLoading && FormatDateWithNames(data["lastBuy"]["date"]),
    },
  ];
  const details_items_box2 = [
    {
      title1: "Last Transaction",
      title2: !isLoading && FormatDateWithNames(data["lastTransaction"]),
    },
    {
      title1: "Last Transaction Type",
      title2: !isLoading && data["lastTransactionType"],
    },
    {
      title1: "Last Transaction Price",
      title2:
        !isLoading && data["lastTransactionPrice"] + " " + item2["currency"],
    },
    {
      title1: "Last Transaction Amount",
      title2: !isLoading && data["lastTransactionAmount"],
    },
  ];
  const details_items_box3 = [
    {
      title1: "Symbol",
      title2: item["symbol"],
    },
    {
      title1: "Current Price",
      title2: item2["price"] + " " + item2["currency"],
    },
    {
      title1: "Total Share Stocks",
      title2: !isLoading && data["bought"],
    },
    {
      title1: "Total Sold Share Stocks",
      title2: !isLoading && data["sold"],
    },
    {
      title1: "Remaining Share Stocks",
      title2: !isLoading && data["remaining"],
    },
    {
      title1: "Earning",
      title2:
        !isLoading && item["price"] && item["price"].toString()[0] !== "-"
          ? item["price"].toFixed(2) + " " + item2["currency"]
          : 0 + " " + item2["currency"],
    },
    {
      title1: "Losing",
      title2:
        !isLoading && item["price"] && item["price"].toString()[0] === "-"
          ? item["price"].toFixed(2) + " " + item2["currency"]
          : 0 + " " + item2["currency"],
    },
  ];
  if (!details) {
    return (
      <div className="flex  ml-[20px] w-full h-full flex-col   xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px]">
        {item.history.map((it: any, idx: number) => {
          return it["amount"].toString()[0] === "-" ? (
            <div
              key={idx}
              className=" w-fit h-full bg-center relative  items-center flex justify-center"
            >
              <div className=" flex flex-col items-center h-full ">
                <div className=" flex">
                  <div className=" relative w-[25px] h-[25px] rounded-full border border-red-600 flex"></div>
                  <span className=" w-[400px] absolute left-[38px] text-slate-400">
                    {FormatDateWithNames(it["createdAt"])}
                  </span>
                </div>
                <div className=" flex relative h-full bg-red-400">
                  <hr className=" h-full flex-1 bg-red-600 border-red-600 w-[1px]" />
                  <div className="  flex items-center absolute left-[-30px] text-center h-full transform rotate-[-90deg]">
                    <span className=" h-fit text-red-600">Sell</span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[5px] mt-[5px] h-fit xl:py-[0px] lg:py-[0px] md:py-[0px] py-[30px]">
                <span className=" text-headerWatch font-[500]">
                  {" "}
                  Amount:{" "}
                  <span className=" text-red-600">
                    {it["amount"]} Stocks
                  </span>{" "}
                </span>
                <span className=" text-headerWatch font-[500]">
                  {" "}
                  Price:{" "}
                  <span className=" text-red-600">
                    {it["price"].toFixed()} {item2["currency"]}
                  </span>{" "}
                </span>
                <span className=" text-headerWatch font-[500]">
                  {" "}
                  Commission:{" "}
                  <span className=" text-slate-400">
                    {it["commission"]}
                  </span>{" "}
                </span>
                <span className=" text-headerWatch font-[500]">
                  {" "}
                  Provider:{" "}
                  <span className=" text-slate-400">{it["provider"]}</span>{" "}
                </span>
              </div>
            </div>
          ) : (
            <div
              key={idx}
              className=" w-fit h-full bg-center relative  items-center flex justify-center"
            >
              <div className=" flex flex-col items-center h-full">
                <div className=" flex">
                  <div className=" relative w-[25px] h-[25px] rounded-full border border-green-600 flex"></div>
                  <span className=" w-[400px] absolute left-[38px] text-slate-400">
                    {FormatDateWithNames(it["createdAt"])}
                  </span>
                </div>
                <div className=" flex relative h-full">
                  <hr className=" h-full flex-1 bg-green-600 border-green-600 w-[1px]" />
                  <div className="  flex items-center absolute left-[-30px] text-center h-full transform rotate-[-90deg]">
                    <span className=" h-fit text-green-600">Buy</span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[5px] mt-[5px] xl:py-[0px] lg:py-[0px] md:py-[0px] py-[30px]">
                <span className=" text-headerWatch font-[500]">
                  {" "}
                  Amount:{" "}
                  <span className=" text-success">
                    {it["amount"]} Stocks
                  </span>{" "}
                </span>
                <span className=" text-headerWatch font-[500]">
                  {" "}
                  Price:{" "}
                  <span className=" text-success">
                    {it["price"].toFixed(2)} {item2["currency"]}
                  </span>{" "}
                </span>
                <span className=" text-headerWatch font-[500]">
                  {" "}
                  Commission:{" "}
                  <span className=" text-slate-400">
                    {it["commission"]}
                  </span>{" "}
                </span>
                <span className=" text-headerWatch font-[500]">
                  {" "}
                  Provider:{" "}
                  <span className=" text-slate-400">{it["provider"]}</span>{" "}
                </span>
              </div>
            </div>
          );
        })}

        <div
          className={` relative w-[25px] h-[15px] rounded-full border ${
            item.history[item.history.length - 1]["amount"].toString()[0] !==
            "-"
              ? "border-green-600"
              : "border-red-600"
          } flex`}
        ></div>
      </div>
    );
  } else {
    return (
      <div className="flex  xl:ml-[20px] lg:ml-[20px] md:ml-[20px] ml-[0px] w-full h-full flex-col   gap-1  xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px]">
        <div className=" border border-divider shadow p-[21px] rounded-xl  h-fit">
          <h1 className=" font-bold text-main">Statistics</h1>
          <div className=" flex flex-col gap-3 mt-3 h-fit">
            {details_items_box3.map((detail: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className=" flex w-full justify-between items-center"
                >
                  <span
                    className={`${
                      detail["title1"] === "Earning"
                        ? "text-green-600"
                        : detail["title1"] === "Losing"
                        ? "text-red-600"
                        : "6B8373"
                    }`}
                  >
                    {detail["title1"]}
                  </span>
                  <span
                    className={`${
                      detail["title1"] === "Earning"
                        ? "text-green-600"
                        : detail["title1"] === "Losing"
                        ? "text-red-600"
                        : "0B1813"
                    }`}
                  >
                    {detail["title2"]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" border border-divider shadow p-[21px] rounded-xl  h-fit">
          <h1 className=" font-bold text-main">Transactions</h1>
          <div className=" flex flex-col gap-3 mt-3 h-fit">
            {details_items_box1.map((detail: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className=" flex w-full justify-between items-center"
                >
                  <span style={{ color: "#6B8373" }}>{detail["title1"]}</span>
                  <span style={{ color: "#0B1813" }} className=" text-center">
                    {detail["title2"]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" border border-divider shadow p-[21px] rounded-xl  h-fit">
          <h1 className=" font-bold text-main">Last Transactions</h1>
          <div className=" flex flex-col gap-3 mt-3 h-fit">
            {details_items_box2.map((detail: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className=" flex w-full justify-between items-center"
                >
                  <span style={{ color: "#6B8373" }}>{detail["title1"]}</span>
                  <span
                    className={` text-center ${
                      detail["title1"] === "Last Transaction Type"
                        ? `text-white px-2 py-1 rounded-sm ${
                            detail["title2"] === "buy"
                              ? "bg-green-600"
                              : "bg-red-600"
                          }`
                        : "text-[#0B1813]"
                    }`}
                  >
                    {detail["title1"] === "Last Transaction Type"
                      ? detail["title2"].toString().toUpperCase()
                      : detail["title2"]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
