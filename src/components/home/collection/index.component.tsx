import React from "react";
import ViewAll from "../viewAll.component";
import Card from "./card.component";
import { stocksStore } from "@/store/stocks";
import { PREDECT } from "@/static/links";

export default function Collection(props: { data: any }) {
  const { stocks } = stocksStore();

  return (
    <div
      className={` w-full  border  text-white  ${
        props["data"][0]["prediction"] === "Up"
          ? "bg-white border-[#EFEFEF]"
          : "bg-[#1F332B]"
      } shadow p-4 py-[20px] rounded-xl flex-1 h-fit flex flex-col gap-3`}
    >
      {/* <ViewAll
        title="AI Insights Hub"
        brief="Potential stock growth tomorrow"
      /> */}
      <div className=" flex flex-col">
        <h1
          className={` font-bold ${
            props["data"][0]["prediction"] === "Up"
              ? "text-[#171D19]"
              : "text-white"
          }  text-[16px] mb-2`}
        >
          AI Insights Hub
        </h1>
        {props["data"][0]["prediction"] === "Up" && (
          <p className=" text-[#45564B] text-[14px] -mt-1">
            Potential stock growth tomorrow
          </p>
        )}
        {props["data"][0]["prediction"] === "Down" && (
          <p className=" text-[#97F675] text-[14px] -mt-1">
            Potential stock contraction tomorrow
          </p>
        )}
      </div>
      <div
        className={` flex gap-2 overflow-x-scroll w-full items-center ${
          props.data[0]["prediction"] === "Down"
            ? "custonScroll"
            : "custonScroll2"
        } `}
      >
        {props.data.map((item: any, idx: number) => {
          const it = stocks.filter((it: any) => item["id"] === it["symbol"])[0];
          return (
            <Card
              key={idx}
              item={it}
              id={item["id"]}
              pred={item["probability"]}
              up={item["prediction"] === "Up"}
            />
          );
        })}
      </div>
    </div>
  );
}
