import React from "react";
import Profile from "./profile.component";
import TextColor from "@/functions/textColor";
import Garph from "@/components/graph.component";
import Trade from "./trade.component";
import ProfileStock from "./profile.component";

export default function Card(props: { text: string; data: any }) {
  const { text, data } = props;

  return (
    <div className=" flex flex-col gap-3 w-70 p-4 border border-divider rounded-lg">
      <ProfileStock />
      <div className=" w-full justify-between items-center flex">
        <span style={{ color: "#45564B" }}>Change(1D)</span>
        <span className={`${TextColor(text[0])}`}>{text}</span>
      </div>
      <div className=" -mt-10">
        <Garph
          data={data}
          height="h-40"
          height2={180}
          color1={text[0] === "+" ? "#2E644E" : "#F04438"}
          color2={text[0] === "+" ? "#9AFF9A" : "#F04438"}
        />
      </div>
      <div className=" w-full flex gap-2">
        <Trade title="Buy" brief="42054.99" />
        <Trade title="Short" brief="42054.99" />
      </div>
    </div>
  );
}
