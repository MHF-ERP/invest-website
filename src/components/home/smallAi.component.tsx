import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

export default function SmallAi(props: { id: string; loading?: boolean }) {
  const { loading } = props;
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
        {!loading && (
          <span className=" text-white font-[500] text-[24px]">
            {props.id}%
          </span>
        )}
        {loading && (
          <ContentLoader height={20} width={30} speed={2}>
            <rect x="0" y="0" rx="3" ry="3" width="30px" height="20px" />
          </ContentLoader>
        )}{" "}
        <span className=" text-[#64A48A] text-[12px]">Accuracy</span>
      </div>
    </div>
  );
}
