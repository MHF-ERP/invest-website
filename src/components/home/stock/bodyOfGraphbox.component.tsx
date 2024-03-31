"use client";
import React from "react";
import Score from "./score.component";
import Statics from "./statics.component";
import ApexChart from "@/components/home/main/graph.component";
import SmallAi from "../smallAi.component";

export default function BodyOfGraphBox(props: { id: string; item: any }) {
  const { item } = props;
  console.log("======================");
  console.log(item);
  return (
    <div className="w-full flex gap-5 xl:flex-row lg:flex-row md:flex-row flex-col">
      <ApexChart title="Performance" />
      <div className=" flex flex-col gap-3" style={{ minWidth: "25%" }}>
        {props.item && <SmallAi id={props.id} />}
        {/* <Score symbol={props.id} /> */}
        {props.item && <Statics stock={props.item} />}{" "}
      </div>
    </div>
  );
}
