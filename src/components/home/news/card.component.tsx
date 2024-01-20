import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className=" flex gap-2">
      <Image
        src={"/images/news/new.jpg"}
        alt="news Image"
        width={70}
        height={70}
        className=" rounded-lg"
      />
      <div className=" flex flex-col gap-1">
        <h1
          style={{ color: "#101828" }}
          className=" font-semibold xl:text-base lg:text-base  text-sm"
        >
          You’ll Wish You Had Bought Broadcom Stock at $1,000
        </h1>
        <div className=" flex gap-1 xl:items-center lg:items-center items-start xl:flex-row lg:flex-row flex-col">
          <span className=" font-semibold text-xs" style={{ color: "#475467" }}>
            InvestorPlace
          </span>
          <div
            className=" w-2 h-2 rounded-full xl:flex lg:flex  hidden"
            style={{ backgroundColor: "#D9D9D9" }}
          ></div>
          <span style={{ color: "#475467" }} className=" text-xs">
            2 hours ago
          </span>
        </div>
      </div>
    </div>
  );
}
