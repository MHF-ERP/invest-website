import React from "react";
import Header from "./header.component";
import Card from "../watchlist/card.component";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Daily() {
  const data = [
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
    {
      img: "/images/companies/orange.png",
      title: "AMD",
      brief: "Advanced Microsoft Development",
      value: "139.99",
      change: "+2.89%",
    },
  ];
  return (
    <div className=" flex-1 -mt-2 flex flex-col p-4 border border-divider shadow rounded-xl">
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
          {data.map((item: any, idx: number) => {
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
          {data.map((item: any, idx: number) => {
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
