import { GetPredectionAi } from "@/services/watchlist/getPerdectionAi";
import { PREDECT } from "@/static/links";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SmallAi(props: { id: string }) {
  return (
    <div className=" h-fit py-[12px] px-[16px]  w-[100%] rounded-[16px] gap-2 bg-[#1F332B] items-center justify-between flex flex-row">
      <div className=" flex flex-col items-start">
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
      <div className=" flex flex-col gap-[1px]">
        <span className=" text-white font-[500] text-[24px]">{props.id}%</span>
        <span className=" text-[#64A48A] text-[12px]">Accuracy</span>
      </div>
    </div>
  );
}
