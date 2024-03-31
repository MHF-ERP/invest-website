import React from "react";
import Card from "./card.component";
import { stocksStore } from "@/store/stocks";
import ContentLoader from "react-content-loader";

export default function LoadingAi(props: { up: boolean }) {
  const { stocks } = stocksStore();

  return (
    <div
      className={` w-full  border  text-white  ${
        props.up ? "bg-white border-[#EFEFEF]" : "bg-[#1F332B]"
      } shadow p-4 py-[20px] rounded-xl flex-1 h-fit flex flex-col gap-3`}
    >
      <div className=" flex flex-col">
        <h1
          className={` font-bold ${
            props.up ? "text-[#171D19]" : "text-white"
          }  text-[16px] mb-2`}
        >
          AI Insights Hub
        </h1>
        {props.up && (
          <p className=" text-[#45564B] text-[14px] -mt-1">
            Potential stock growth tomorrow
          </p>
        )}
        {!props.up && (
          <p className=" text-[#97F675] text-[14px] -mt-1">
            Potential stock contraction tomorrow
          </p>
        )}
      </div>
      <div
        className={` flex gap-2 overflow-x-scroll w-full items-center ${
          !props.up ? "custonScroll" : "custonScroll2"
        } `}
      >
        {!props.up &&
          [0, 1, 2, 3, 4, 5, 6].map((item: any, idx: number) => {
            return (
              <ContentLoader
                key={idx}
                height={200}
                speed={2}
                backgroundColor="#1F332B"
                foregroundColor="#2E644E"
              >
                <rect x="0" y="25" rx="3" ry="3" width="100%" height="100" />
              </ContentLoader>
            );
          })}

        {props.up &&
          [0, 1, 2, 3, 4, 5, 6].map((item: any, idx: number) => {
            return (
              <ContentLoader key={idx} height={200} speed={2}>
                <rect x="0" y="25" rx="3" ry="3" width="100%" height="100" />
              </ContentLoader>
            );
          })}
      </div>
    </div>
  );
}
