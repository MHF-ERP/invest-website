import React from "react";
import Profile from "./profile.component";
import TextColor from "@/functions/textColor";
import Garph from "@/components/graph.component";
import Trade from "./trade.component";
import ProfileStock from "./profile.component";

export default function Card(props: { text: string; data: any }) {
  const { text, data } = props;

  return (
    <div className=" flex flex-col gap-3 w-[23%] p-[14px] border border-divider rounded-[8px]">
      <ProfileStock />
      <div className=" w-full py-[12px] justify-between items-center flex">
        <span className=" text-[#45564B] text-[12px]  font-[500]  ">
          Change(1D)
        </span>
        <span className={`${TextColor(text[0])}`}>{text}</span>
      </div>
      <div className=" -mt-10">
        <Garph
          data={data}
          height="h-40"
          height2={180}
          color1={text[0] === "+" ? "#17B26A" : "#F04438"}
          color2={text[0] === "+" ? "#17B26A" : "#F04438"}
        />
      </div>
      <div className=" w-full flex gap-2">
        <Trade title="Buy" brief="42054.99" />
        <Trade title="Short" brief="42054.99" />
      </div>
    </div>
  );
}
