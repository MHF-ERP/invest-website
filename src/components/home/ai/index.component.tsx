import Image from "next/image";
import React from "react";
import Company from "./company.component";

export default function Ai() {
  return (
    <div className=" h-fit py-6 w-[25%] rounded-[16px] gap-2 bg-[#1F332B] items-center justify-center flex flex-col">
      <div className=" flex flex-col items-center">
        <h1
          className=" text-[#FFF] text-[16px] font-semibold mb-1"
          style={{ lineHeight: "120%" }}
        >
          AI Insights Hub
        </h1>

        <p className=" text-[#97F675] text-[14px] ">
          Potential stock growth tomorrow
        </p>
      </div>

      <div className=" w-full flex justify-center items-center mt-4 px-6">
        <Company />
        <Company />
      </div>
    </div>
  );
}
